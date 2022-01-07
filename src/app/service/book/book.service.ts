import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Book} from "../../model/book";
import {environment} from "../../../environments/environment";

const urlAPI = environment.urlAPI;

@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor(private http: HttpClient) { }

  getAll() : Observable<Book[]>{
    console.log(urlAPI)
    return this.http.get<Book[]>(`${urlAPI}/books`);
  }
  getById(id:number): Observable<Book>{
    return this.http.get<Book>(`http://localhost:3000/books/${id}`)
  }
  create(book: Book) : Observable<Book>{
    return this.http.post<Book>(`http://localhost:3000/books`,book);
  }
  edit(id:number,book: Book) : Observable<Book>{
    return this.http.put<Book>(`http://localhost:3000/books/${id}`,book);
  }
  delete(id:number): Observable<Book>{
    return this.http.delete<Book>(`http://localhost:3000/books/${id}`)
  }
}
