import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { ProductCreateComponent } from './component/product/product-create/product-create.component';
import { ProdutcUpdateComponent } from './component/product/produtc-update/produtc-update.component';
import { ProductDeleteComponent } from './component/product/product-delete/product-delete.component';


const routes: Routes = [
  {
   path: "",
   component: HomeComponent
  },
  { 
    path:"products",
    component: ProductCrudComponent
  },
  { 
    path:"products/create",
    component: ProductCreateComponent
  }, 
  { 
    path:"products/update/:id",
    component: ProdutcUpdateComponent
  },
  { 
    path:"products/delete/:id",
    component: ProductDeleteComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
