import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Posts } from 'src/app/posts';
import { User } from 'src/app/user';


@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
  userId: number;
  user: User = {posts: []};
  sub: Subscription; 
  sub2: Subscription;
  newPost: Posts = {title: "", body: ""};

  constructor(private ar: ActivatedRoute, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.sub = this.ar.params.subscribe(data => this.userId = data["id"]);
    this.sub2 = this.http.get<User>("http://localhost:8000/api/users/"+ this.userId)
    .subscribe(userData => { this.user = userData
      
     
   });

  }

  
  add()
  {
    this.user.posts.push(this.newPost);
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
