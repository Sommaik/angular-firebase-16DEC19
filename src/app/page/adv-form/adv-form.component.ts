import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

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

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  onFormSubmit() {
    if (this.loginForm.valid) {
      console.log('send data to server');
    } else {
      console.log('invalid form');
    }
  }

}
