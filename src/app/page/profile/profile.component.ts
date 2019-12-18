import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileForm = this.fb.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]]
  });

  uploadPercent: Observable<number>;
  avatar: string;

  constructor(
    private fb: FormBuilder,
    private afstore: AngularFirestore,
    private afauth: AngularFireAuth,
    private afstorage: AngularFireStorage
  ) { }

  ngOnInit() {
    const { uid }  = this.afauth.auth.currentUser;
    this.afstore.collection('profile').doc(uid).get().subscribe((document) => {
       this.profileForm.patchValue( document.data() );
    });

    this.afstorage.ref(uid).getDownloadURL().subscribe(url => {
      this.avatar = url;
    });
  }

  onFormSubmit() {
    if (this.profileForm.valid) {
      const { uid }  = this.afauth.auth.currentUser;
      this.afstore.collection('profile').doc(uid).set(
        this.profileForm.value
      );
    }
  }

  onSelectAvatar(event) {
    const file: File = event.target.files[0];
    const filename = this.afauth.auth.currentUser.uid;
    const task = this.afstorage.upload(filename, file);
    this.uploadPercent = task.percentageChanges();
  }

}
