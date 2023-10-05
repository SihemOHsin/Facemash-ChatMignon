import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  baseUrl ="https://latelier.co/data/cats.json";
  constructor(private http:HttpClient) { }

  getChats():Observable<any>
{
  return this.http.get<any>(this.baseUrl);
}
}
