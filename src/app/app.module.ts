import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main/main-page/main-page.component';
import { UsersPageComponent } from './users/users-page/users-page.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ButtonComponent } from './button/button/button.component';
import { UserTodosComponent } from './todos/user-todos/user-todos.component';
import { AddNewUserCompComponent } from './addNewUser/add-new-user-comp/add-new-user-comp.component';
import { UserPostComponent } from './posts/user-post/user-post.component';
import { MaintodosCompComponent } from './mainToDosPosts/maintodos-comp/maintodos-comp.component';

import { NewTodoComponent } from './newTodo/new-todo/new-todo.component';
import { NewPostComponent } from './newPost/new-post/new-post.component';
// import { Ng2OrderModule } from 'ng2-order-pipe';


const appRoutes: Routes = [
  {path: "main", component: MainPageComponent,},
  
  {path: "todoandposts/:id", component: MaintodosCompComponent},
  {path: "newtodo/:id", component: NewTodoComponent},
  {path: "newpost/:id", component: NewPostComponent}  
 

 
]

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    UsersPageComponent,
    ButtonComponent,
    UserTodosComponent,
    AddNewUserCompComponent,
    UserPostComponent,
    MaintodosCompComponent,
    
    NewTodoComponent,
    NewPostComponent,
    
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NoopAnimationsModule,
    MatButtonModule,
    RouterModule.forRoot(appRoutes),
    Ng2SearchPipeModule,
    // Ng2OrderModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
