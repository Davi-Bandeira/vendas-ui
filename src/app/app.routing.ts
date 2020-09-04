import { ModuleWithProviders } from '@angular/core'
import { RouterModule, Routes } from '@angular/router';

import { ClientComponent } from './client/client.component';
import { ProductComponent } from './product/product.component';

const APP_ROUTES: Routes = [
  {path: 'client', component: ClientComponent},
  {path: 'product', component: ProductComponent},
  {path: '', component: ClientComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
