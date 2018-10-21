import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  fieldArray: Array<any> = [];
  // newAttribute: any = {};
  user: User;
  constructor() { }

  ngOnInit() {
    this.user = new User();
  }

  addFieldValue(user) {
    this.fieldArray.push(user)
    // this.newAttribute = {};
  }

  deleteFieldValue(index) {
    this.fieldArray.splice(index, 1);
  }

}
