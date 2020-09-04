import { ModuleWithProviders } from '@angular/core'
import { RouterModule, Routes } from '@angular/router';

import { ClientComponent } from './client/client.component';
import { ProductComponent } from './product/product.component';
import { SaleComponent } from './sale/sale.component';

const APP_ROUTES: Routes = [
  {path: 'client', component: ClientComponent},
  {path: 'product', component: ProductComponent},
  {path: 'sale', component: SaleComponent},
  {path: '', component: ClientComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
