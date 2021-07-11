import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/user';
import { Tasks } from 'src/app/tasks';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-user-todos',
  templateUrl: './user-todos.component.html',
  styleUrls: ['./user-todos.component.css']
})
export class UserTodosComponent implements OnInit {
  @Input()
  todosID: Tasks
  @Output() 
  onToggleCompleted: EventEmitter<Tasks> = new EventEmitter();

  
  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
  }
  onToggle()
  {
    this.onToggleCompleted.emit(this.todosID);
  }

}  
