import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/providers/user.service';
import { User } from 'src/entities/user';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private userService:UserService) { }
  userModel :User;
  ngOnInit() {
    this.userModel = new User();
  }

  AddUser(user : User){
    console.log(user);
    this.userService.AddUser(user);

  }


}
