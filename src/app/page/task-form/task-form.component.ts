import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router, ActivatedRoute } from '@angular/router';
import { Task } from 'src/app/model/task';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  taskForm = this.fb.group({
    taskName: ['', [Validators.required]],
    completed: [false, []]
  });

  isEditMode = false;
  id: string;

  constructor(
    private fb: FormBuilder,
    private afstore: AngularFirestore,
    private router: Router,
    private actroute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.actroute.params.subscribe(params => {
      if (params.id) {
        this.isEditMode = true;
        this.id = params.id;
        this.afstore
          .collection('task')
          .doc(params.id)
          .get().subscribe(ref => {
            this.taskForm.patchValue(ref.data());
          });
      }
    });
  }

  onFormSubmit() {
    if (this.taskForm.valid) {
      if (this.isEditMode) {
        this.afstore
          .collection<Task>('task')
          .doc(this.id)
          .update(this.taskForm.value).then(ref => {
            this.router.navigate(['admin', 'task']);
          })
          .catch(reason => {

          });
      } else {
        this.afstore
        .collection('task')
        .add(this.taskForm.value)
        .then(ref => {
          this.router.navigate(['admin', 'task']);
        })
        .catch(reason => {

        });
      }
    }
  }

}
