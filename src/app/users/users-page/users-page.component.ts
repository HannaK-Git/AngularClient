import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { User } from 'src/app/user';
import { Tasks } from 'src/app/tasks';
import { Posts } from 'src/app/posts';
import { UtilsService } from 'src/app/utils.service';


@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})
export class UsersPageComponent implements OnInit {

  constructor(private router: Router, private srv: UtilsService , private http: HttpClient, private ar: ActivatedRoute 
) { }
  @Input()
  
dataAboutUsers: User = {_id: 0, name: '', email: '', street: '', city: '', zipcode: 0, tasks: [], posts: []}
userId: number;
newUser: User = { name: '', email: '' , street: '', city: '', zipcode:0 }
isExist: boolean;

sub: Subscription;
sub2: Subscription;

showTodos: boolean;

completedTasks: String = "mainclass";




 

update(id: number, name: string, email: string , street: string, city: string, zipcode: number )
    {
      this.userId = id
       this.newUser = {name: name, email: email, street: street, city: city, zipcode: zipcode}
       console.log(this.userId, this.newUser)
     this.sub = this.http.put("http://localhost:8000/api/users/" + this.userId, this.dataAboutUsers)
      .subscribe(status => {
        alert('Updated');
        this.ngOnInit();
      })
        
      
     
    }



delete(id: number)
{
  this.userId = id;
 this.sub2 = this.srv.deleteItem("http://localhost:8000/api/users", this.userId)
 .subscribe( status => {
   alert("Deleted"); 
   window.location.reload()
 })
}

componentRerender()
{
  this.showTodos = !this.showTodos;
  if(this.showTodos == false)
  {
    this.router.navigate(["/"]);
  }

}


  ngOnInit(): void {
    let counter : number = 0;
    let tasks: any[] = this.dataAboutUsers.tasks;

    tasks.forEach(element => {
      if(element.completed == false)
      {
        counter++;
      }
    });
    if(counter > 0)
    {
      this.completedTasks = "redclass";
    }
    else{
      this.completedTasks = "mainclass";
    }
  }

  

}
