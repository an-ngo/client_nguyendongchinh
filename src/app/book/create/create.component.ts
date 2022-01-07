import { Component, OnInit } from '@angular/core';
import {BookService} from "../../service/book/book.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Book} from "../../model/book";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  count: number = -1;
  book: Book ={
    id:-1,
    title:'',
    author:'',
    description:''
  };
  constructor(
    private activatedRoute:ActivatedRoute,
    private bookService: BookService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  create(value:any) {
    this.book=value;
    this.bookService.getAll().subscribe(value1 => {
      this.book.id=value1.length
      const length = value1.length;
      this.bookService.create(this.book).subscribe(book=>this.book=book,error => console.log(error));
    })
    alert("success")
  }

  backToList() {
    this.router.navigateByUrl("/list")
  }
}
