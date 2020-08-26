import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { SharedModule } from './../../shared/shared.module';
import { MainComponent } from './main.component';
import { LoginComponent } from './../../modules/login/login.component';
import { Error404Component } from 'src/app/modules/errors/error404/error404.component';
import { Error401Component } from 'src/app/modules/errors/error401/error401.component';
import { MaintenanceComponent } from './../../modules/maintenance/maintenance.component';


@NgModule({
  declarations: [
    MainComponent,
    LoginComponent,
    Error404Component,
    Error401Component,
    MaintenanceComponent],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class MainModule { }
