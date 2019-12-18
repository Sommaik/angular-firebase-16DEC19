import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

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

  constructor(
    private fb: FormBuilder,
    private afstore: AngularFirestore,
    private afauth: AngularFireAuth
  ) { }

  ngOnInit() {
  }

  onFormSubmit() {
    if (this.profileForm.valid) {
      const { uid }  = this.afauth.auth.currentUser;
      this.afstore.collection('profile').doc(uid).set(
        this.profileForm.value
      );
    }
  }

}
