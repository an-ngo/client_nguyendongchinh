import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import {CreateComponent} from "./create/create.component";
import {ListComponent} from "./list/list.component";
import {DeleteComponent} from "./delete/delete.component";
import {EditComponent} from "./edit/edit.component";
import { GetComponent } from './get/get.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    CreateComponent,
    ListComponent,
    DeleteComponent,
    EditComponent,
    GetComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule,

  ]
})
export class ProductModule { }
