import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../model/Book';
import { api } from './Api';
import { Message } from '../model/Message';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpclient:HttpClient) { }

  getBooks() : Observable<Book[]>{
      return this.httpclient.get<Book[]>(api+"/books/")
  }

  postListOfBooks(books : Book[]): Observable<Message>{
    return this.httpclient.post<Message>(api+"/books/file",books)
  }
}
