import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';

@Component({
  selector: 'app-phone-login',
  templateUrl: './phone-login.component.html',
  styleUrls: ['./phone-login.component.css']
})
export class PhoneLoginComponent implements OnInit {

  phoneForm = this.fb.group({
    phone: ['', [Validators.required]]
  });

  otpForm = this.fb.group({
    otp: ['', [Validators.required]]
  });

  confirmResult: firebase.auth.ConfirmationResult;

  constructor(
    private fb: FormBuilder,
    private afauth: AngularFireAuth
  ) { }

  ngOnInit() {
  }

  requestOtp() {
    const { phone } = this.phoneForm.value;
    this.afauth.auth.signInWithPhoneNumber(
      '+66' + phone,
      new firebase.auth.RecaptchaVerifier('recapt-panel')
    ).then(confirmResult => {
      this.confirmResult = confirmResult;
    });
  }

  confirmOtp() {
    const { otp } = this.otpForm.value;
    this.confirmResult.confirm(otp).then(cred => {
      console.log('opt login success');
    }).catch(reason => {
      console.log('login fail');
    });
  }

}
