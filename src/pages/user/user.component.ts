import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/providers/user.service';
import { User } from 'src/entities/user';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userService:UserService) { }

  userList : User[] = [];
  userModel :User;

 // eklenen :any;

  ngOnInit() {
    this.userService.getUsers().subscribe(data=> {
      this.userList = data;    
    })
    
    this.userModel = new User();
  }

  



}
