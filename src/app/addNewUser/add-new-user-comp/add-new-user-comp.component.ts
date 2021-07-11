import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { utils } from 'protractor';
import { User } from 'src/app/user';
import { UtilsService } from 'src/app/utils.service';


@Component({
  selector: 'app-add-new-user-comp',
  templateUrl: './add-new-user-comp.component.html',
  styleUrls: ['./add-new-user-comp.component.css']
})
export class AddNewUserCompComponent implements OnInit {



@Output() onAddUser: EventEmitter<User> = new EventEmitter();
name: string = '';
email: string = '';
newUser: User = {name: "", email: ""}
isnotExist: boolean = true;

  constructor(private srv: UtilsService) { }

  ngOnInit(): void {
  }
  

  add()
  {
    if(!this.name)
    {
      alert('Name required')
    }
    if(!this.email)
    {
      alert('Email required')
    }
    
   let obj = this.newUser = {name: this.name, email: this.email}
    
    this.onAddUser.emit(obj);

    this.name = "";
    this.email = "";
 
     
  }

}
