import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { User } from 'src/app/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  url = 'http://www.google.com';
  @Input() name: string;
  title = 'Home Component';
  @Output() confirmUrl: EventEmitter<string> = new EventEmitter();
  isShow = true;
  list = ['One', 'Two', 'Three', 'Four'];
  price = 1234654.89;
  currentDate = new Date();
  userList: User[];

  get toogleLabel(): string {
    return this.isShow ? 'Hide' : 'Show';
  }

  constructor(
    private userService: UserService,
    private router: Router
  ) {
    this.userService.list().subscribe((resp) => {
      this.userList = resp;
    });
  }

  ngOnInit() {
  }

  onBtnClick() {
    this.confirmUrl.emit(this.url);
  }

  onGotoSupport() {
    this.router.navigate(['support', 'aboutus']);
  }
}
