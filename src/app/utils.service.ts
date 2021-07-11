import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tasks } from './tasks';

import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  private apiUrl = 'http://localhost:8000/api/users';
  constructor(private http: HttpClient) { }

getAllData(url: string)
{
  return this.http.get<any[]>(url); 
}
getById(url: string, id: number)
{
  return this.http.get<any>(url + "/" + id);
}

updateItem(url: string, id: number, obj: any)
{
  return this.http.put(url + "/" + id, obj);
}
addItem(url: string, obj: any)
{
  return this.http.post(url, obj);
}

deleteItem(url: string, id: number)
{
  return this.http.delete(url + "/" + id);
}
 


}
