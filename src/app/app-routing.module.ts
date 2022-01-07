import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListComponent} from "./book/list/list.component";
import {CreateComponent} from "./book/create/create.component";
import {EditComponent} from "./book/edit/edit.component";
import {DeleteComponent} from "./book/delete/delete.component";

const routes: Routes = [
  // {path:``,component: ListComponent},
  // {path:`create`,component:CreateComponent},
  // {path:`edit`,component:EditComponent},
  // {path:`delete`,component:DeleteComponent}
  {
    path: 'list', loadChildren: () => import('./book/product.module').then(modules => modules.ProductModule)
  },
  {path:'',redirectTo:'/list',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
