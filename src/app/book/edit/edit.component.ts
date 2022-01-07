import { Component, OnInit } from '@angular/core';
import {BookService} from "../../service/book/book.service";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {Book} from "../../model/book";
import {map, switchMap} from "rxjs";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  book:Book={
    id:1 ,
    title:'',
    author:'',
    description:''

  };
  constructor(private bookService:BookService,
              private activatedRoute: ActivatedRoute
              ) { }

  ngOnInit(): void {
    // this.activatedRoute.paramMap.subscribe(params=>{
    //   const id = Number(params.get('id'));
    //   this.bookService.getById(id).subscribe(value => {
    //     this.book = value;
    //     console.log(value);
    //   })
    // })
    this.activatedRoute.paramMap.pipe(
      map(params=>params.get('id')),
      switchMap(id=>this.bookService.getById(Number(id)))
    ).subscribe(book=>this.book=book)
  }

  addBook(value:any) {
    // this.activatedRoute.paramMap.subscribe(params=>{
    //   const id = Number(params.get('id'));
    //   this.bookService.edit(id,value).subscribe(book => {
    //     this.book = book;
    //     console.log(this.book);
    //   })
    // })
    this.activatedRoute.paramMap.pipe(
      map(params=>params.get('id')),
      switchMap(id=>this.bookService.edit(Number(id),value))
    ).subscribe(book=>this.book=book);
    alert("edit success")
  }
}
