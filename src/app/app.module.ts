import { EcommerceModule } from './layouts/ecommerce/ecommerce.module';
import { AdminModule } from './layouts/admin/admin.module';
import { MainModule } from './layouts/main/main.module'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Error404Component } from './modules/errors/error404/error404.component';
import { Error401Component } from './modules/errors/error401/error401.component';
import { MaintenanceComponent } from './modules/maintenance/maintenance.component';


@NgModule({
  declarations: [
    AppComponent,
    Error404Component,
    Error401Component,
    MaintenanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    EcommerceModule,
    MainModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
