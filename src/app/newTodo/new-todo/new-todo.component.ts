import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Tasks } from 'src/app/tasks';
import { User } from 'src/app/user';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.css']
})
export class NewTodoComponent implements OnInit {

  userId: number;
  user: User = {tasks: [] };
  newTitle: string;
  sub: Subscription;
  sub2: Subscription;
  sometasks: Tasks = {title: "", completed: false};
  
  
  constructor(private ar: ActivatedRoute, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.sub = this.ar.params.subscribe(data => this.userId = data["id"]);
    this.sub2 = this.http.get<User>("http://localhost:8000/api/users/"+ this.userId)
    .subscribe(userData => { this.user = userData
      
     
   });
  }
   
  add()
  {
     this.user.tasks.push(this.sometasks);
    this.http.put<User>("http://localhost:8000/api/users/"+ this.userId, this.user)
    .subscribe(status => {
      alert(status);
      this.router.navigate(["/todoandposts/" + this.userId])
    
    });
  } 

  ngOnDestroy()
  {
    this.sub.unsubscribe();
    this.sub2.unsubscribe();
  }

}
