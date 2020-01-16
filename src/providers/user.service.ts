import { Injectable, ErrorHandler } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "src/entities/user";

import { HttpHeaders } from "@angular/common/http";
import { Router } from '@angular/router';

@Injectable({
  providedIn: "root"
})
export class UserService {
  
  constructor(private http: HttpClient,private router: Router) {
  }

  httpOptions = {
    headers: new HttpHeaders({
      //"Content-Type": "application/x-www-form-urlencoded",
     'Content-Type': 'application/json',
      'Accept': 'application/json'
    })
  };

  getUsers() {
    return this.http.get<User[]>("http://localhost:52211/api/users/");
  }

  AddUser(user: User){
    console.log(user);
    return this.http.post<User>("http://localhost:52211/api/users",JSON.stringify(user),this.httpOptions)
      .subscribe(data => {      
          console.log(data);
          this.router.navigate(['/Home']
          //,{ queryParams: { user: user.Id } }
          );
          // handler: () => {
          
          //   console.log(data);
          // };
        },
        error => {
          console.log(error);
        }
      );
  }


}
