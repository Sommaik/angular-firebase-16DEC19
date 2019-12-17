import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent implements OnInit {

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onFormSubmit(form: NgForm) {
    if (form.valid) {
      console.log('send data to server');
      this.userService
        .login(form.value)
        .subscribe((resp) => {
          console.log('login success');
          this.router.navigate(['home']);
        }, (error) => {
          console.log('error');
        });
    } else {
      console.log('invalid form');
    }
  }

}
