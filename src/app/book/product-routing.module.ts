import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListComponent} from "./list/list.component";
import {EditComponent} from "./edit/edit.component";
import {DeleteComponent} from "./delete/delete.component";
import {CreateComponent} from "./create/create.component";
import {GetComponent} from "./get/get.component";

const routes: Routes = [
  {path:'',component:ListComponent},
  {path:`edit/:id`,component:EditComponent},
  {path:`delete/:id`,component:DeleteComponent},
  {path:'create',component:CreateComponent},
  {path:'get/:id',component: GetComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
