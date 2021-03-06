import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/user.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-adv-form',
  templateUrl: './adv-form.component.html',
  styleUrls: ['./adv-form.component.css']
})
export class AdvFormComponent implements OnInit {

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  });

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private afauth: AngularFireAuth
  ) { }

  ngOnInit() {
  }

  // onFormSubmit() {
  //   if (this.loginForm.valid) {
  //     console.log('send data to server');
  //     this.userService
  //       .register(this.loginForm.value)
  //       .subscribe((resp) => {
  //         console.log('register success');
  //         this.router.navigate(['login']);
  //       }, (error) => {
  //         console.log('error');
  //       });
  //   } else {
  //     console.log('invalid form');
  //   }
  // }

  onFormSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.afauth.auth
        .createUserWithEmailAndPassword(email, password)
        .then((cred) => {
          if (!!cred) {
            cred.user.sendEmailVerification();
          }
          console.log('register success');
        })
        .catch((reason) => {
          console.log('register fail');
        });
     }
  }

}
