import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout'

import { SharedModule } from 'src/app/shared/shared.module'
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './../../modules/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    SharedModule
  ]
})
export class AdminModule { }
