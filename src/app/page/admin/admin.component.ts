import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(
    private afauth: AngularFireAuth,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSignOut() {
    this.afauth.auth.signOut().then(() => {
      this.router.navigate(['home']);
    });
  }

}
