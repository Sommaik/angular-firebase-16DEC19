import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Task } from 'src/app/model/task';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  taskList: Observable<Task[]>;
  modalRef: BsModalRef;
  id: string;
  filterForm = this.fb.group({
    taskName: ['']
  });

  constructor(
    private router: Router,
    private afstore: AngularFirestore,
    private modalService: BsModalService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.taskList = this.afstore
      .collection<Task>('task')
      .valueChanges({ idField: 'id' });
  }

  onFilterSubmit() {
    const { taskName } = this.filterForm.value;
    this.taskList = this.afstore
      .collection<Task>('task', query => query.where('taskName', '>=', taskName))
      .valueChanges({ idField: 'id' });
  }

  onAddButtonClick() {
    this.router.navigate(['admin', 'task-form']);
  }

  onDelButtonClick(id: string) {
    this.afstore.collection('task').doc(id).delete();
  }

  onEditButtonClick(id: string) {
    this.router.navigate(['admin', 'task-form', id]);
  }

  openModal(cofirmDialog: TemplateRef<any>, id: string) {
    this.modalRef = this.modalService.show(cofirmDialog);
    this.id = id;
  }

  confirm() {
    this.onDelButtonClick(this.id);
    this.modalRef.hide();
  }

  decline() {
    this.modalRef.hide();
  }

}
