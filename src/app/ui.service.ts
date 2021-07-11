import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showTodo: boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  toggleshowTodo() : void{
    
    this.showTodo = !this.showTodo;
    this.subject.next(this.showTodo)
  }

  onToggle(): Observable<any>
  {
    return this.subject.asObservable();
  }
}
