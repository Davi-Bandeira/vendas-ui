import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClientComponent } from './client/client.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {path: 'client', component: ClientComponent},
  {path: 'product', component: ProductComponent},
  {path: '', component: ClientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
