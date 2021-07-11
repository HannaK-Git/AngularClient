import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/user';
import { UtilsService } from 'src/app/utils.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(private srv: UtilsService, private http: HttpClient, private router: Router) { }
sub: Subscription;
sub2: Subscription;
users: User[];
searchUser: User[];
searchItem: string;
firstName: any;
newUserCompExist: boolean = false;

  ngOnInit(): void {
this.sub = this.srv.getAllData("http://localhost:8000/api/users")
.subscribe(data => this.users = data);
  }

  
  serachByNameOrEmail()
  {
    
       if(this.firstName == "")
      {
        this.ngOnInit();
      }else{
        this.users = this.users.filter(res =>
          {
            return res.name.toLocaleLowerCase().match(this.firstName.toLocaleLowerCase()) || res.email.toLocaleLowerCase().match(this.firstName.toLocaleLowerCase())
          })
      }
  }

  addUser(user: User)
  {
   this.sub2 = this.srv.addItem("http://localhost:8000/api/users", user )
    .subscribe(status =>
      {
        alert("Created")
        return this.ngOnInit()
      })
  }
  ngOnDestroy()
  {
    this.sub.unsubscribe();
    this.sub2.unsubscribe();
  }

}
