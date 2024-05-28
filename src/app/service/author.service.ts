import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Author } from '../model/Author';
import { api } from './Api';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private httpclient:HttpClient) { }

  getAuthors() : Observable<Author[]>{
      return this.httpclient.get<Author[]>(api+"/authors/")
  }
}
