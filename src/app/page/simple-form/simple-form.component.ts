import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onFormSubmit(form: NgForm) {
    if (form.valid) {
      console.log('send data to server');
    } else {
      console.log('invalid form');
    }
  }

}
