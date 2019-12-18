import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/user.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent implements OnInit {

  constructor(
    private userService: UserService,
    private router: Router,
    private afauth: AngularFireAuth
  ) { }

  ngOnInit() {
  }

  // onFormSubmit(form: NgForm) {
  //   if (form.valid) {
  //     console.log('send data to server');
  //     this.userService
  //       .login(form.value)
  //       .subscribe((resp) => {
  //         console.log('login success');
  //         this.router.navigate(['home']);
  //       }, (error) => {
  //         console.log('error');
  //       });
  //   } else {
  //     console.log('invalid form');
  //   }
  // }

  onFormSubmit(form: NgForm) {
    if (form.valid) {
      const { email, password } = form.value;
      this.afauth.auth
        .signInWithEmailAndPassword(email, password)
        .then(cred => {
          if (cred.user.emailVerified) {
            console.log('go to home page');
            this.router.navigate(['home']);
          }
        })
        .catch(reason => {
          console.log('error');
        });
    }
  }

  signInWithGmail() {
    this.afauth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider() );
  }

  signInWithFB() {
    this.afauth.auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider());
  }

  signInWithPhone() {
    this.router.navigate(['phone-login']);
  }

}
