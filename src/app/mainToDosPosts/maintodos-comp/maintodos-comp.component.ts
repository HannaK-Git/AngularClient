import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Tasks } from 'src/app/tasks';
import { User } from 'src/app/user';
import { UtilsService } from 'src/app/utils.service';

@Component({
  selector: 'app-maintodos-comp',
  templateUrl: './maintodos-comp.component.html',
  styleUrls: ['./maintodos-comp.component.css']
})
export class MaintodosCompComponent implements OnInit {
  userId: number;
  UserData: User = {_id: 0, name: ''};
  sub: Subscription;
  sub2: Subscription;
  constructor(private router: Router, private ar: ActivatedRoute,
     private http: HttpClient, private utils: UtilsService) { }
 
  ngOnInit(): void {
   this.sub = this.ar.params.subscribe(data => this.userId = data["id"]);
     this.sub2 = this.http.get<User>("http://localhost:8000/api/users/"+ this.userId)
     .subscribe(userData => { this.UserData = userData
        
      
    });
     
    
  }
 
  
  toggleCompleted(task: Tasks)
  {
    for (const tasks_k of this.UserData.tasks ) {
      if (tasks_k._id == task._id) {
          tasks_k.completed =  true;
          break;
      }
  }
    this.http.put<User>("http://localhost:8000/api/users/"+ this.userId, this.UserData )
    .subscribe(status => {
      alert(status);
    }
      
    );
    
  }

 ngOnDestroy()
 {
   this.sub.unsubscribe();
   this.sub2.unsubscribe();
 }

}
