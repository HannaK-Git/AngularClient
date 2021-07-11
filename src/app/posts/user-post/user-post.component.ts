import { Component, OnInit, Input } from '@angular/core';
import { Posts } from 'src/app/posts';

@Component({
  selector: 'app-user-post',
  templateUrl: './user-post.component.html',
  styleUrls: ['./user-post.component.css']
})
export class UserPostComponent implements OnInit {
@Input()
postID: Posts;
  constructor() { }

  ngOnInit(): void {
  }

  

}
