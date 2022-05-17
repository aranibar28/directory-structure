import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexCustomerComponent } from './pages/index-customer/index-customer.component';
import { CreateCustomerComponent } from './pages/create-customer/create-customer.component';
import { UpdateCustomerComponent } from './pages/update-customer/update-customer.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: IndexCustomerComponent },
      { path: 'create', component: CreateCustomerComponent },
      { path: 'update', component: UpdateCustomerComponent },
      { path: '**', redirectTo: '' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class CustomersRoutingModule {}
