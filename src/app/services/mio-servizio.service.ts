import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Resp} from '../interfaces/resp';

@Injectable({
  providedIn: 'root'
})
export class MioServizioService{
  numero =  1;
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  getPosts(): Observable < Resp[] > {
    return this.http.get < Resp[] > (this.apiUrl);
  }
}
