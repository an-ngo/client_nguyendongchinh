import { Component, OnInit } from '@angular/core';
import {BookService} from "../../service/book/book.service";
import {Book} from "../../model/book";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  books : Book[] = []
  count: number =0;
  constructor(
    private bookService: BookService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.bookService.getAll().subscribe(value=>{
        this.books=value;
        this.count=this.books.length;
      }
      ,error =>{
        console.log(error)
      } )
  }

  navigateToCreate() {
    this.router.navigate(['/list/create'])
  }
}
