import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexProductComponent } from './pages/index-product/index-product.component';
import { CreateProductComponent } from './pages/create-product/create-product.component';
import { UpdateProductComponent } from './pages/update-product/update-product.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: IndexProductComponent },
      { path: 'create', component: CreateProductComponent },
      { path: 'update', component: UpdateProductComponent },
      { path: '**', redirectTo: '' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class ProductsRoutingModule {}
