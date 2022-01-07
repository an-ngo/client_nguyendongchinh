import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {BookService} from "../../service/book/book.service";
import {map, switchMap} from "rxjs";

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {
  success:string='';
  error:string='';
  constructor(
    private router:Router,
    private bookService:BookService,
    private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {

  }

  deleteById() {
    this.activatedRoute.paramMap.pipe(
      map(params=>params.get('id')),
      switchMap(id=>this.bookService.delete(Number(id)))
    ).subscribe(value => this.success="success",error1 => this.error="error" );
    this.router.navigateByUrl('/list')
  }

  backToList() {
    this.router.navigateByUrl('/list')
  }
}
