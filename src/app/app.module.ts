import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { ProductComponent } from './product/product.component';
//import { routing } from './app.routing';
import {ClientService} from './client/client.service';
import { SaleComponent } from './sale/sale.component';


@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    ProductComponent,
    SaleComponent
  ],
  imports: [
    BrowserModule,
    //routing,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],

  providers: [ClientService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
