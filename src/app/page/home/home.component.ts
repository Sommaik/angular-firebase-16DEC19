import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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

  get toogleLabel(): string {
    return this.isShow ? 'Hide' : 'Show';
  }

  constructor() { }

  ngOnInit() {
  }

  onBtnClick() {
    this.confirmUrl.emit(this.url);
  }

}
