import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {BookService} from "../../service/book/book.service";
import {map, switchMap} from "rxjs";
import {Book} from "../../model/book";

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.scss']
})
export class GetComponent implements OnInit {
  book:Book={
    title:'',
    author:'',
    description:''

  };
  constructor(private activatedRoute:ActivatedRoute,
              private bookService:BookService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.pipe(
      map(params=>params.get('id')),
      switchMap(id=>this.bookService.getById(Number(id)))
    ).subscribe(value => this.book=value);
    console.log(this.book)
  }

}
