import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'
import { FlexLayoutModule } from '@angular/flex-layout'

import { SharedModule } from 'src/app/shared/shared.module'
import { EcommerceComponent } from './ecommerce.component';
import { PostsComponent } from './../../modules/posts/posts.component';
import { HomeComponent } from './../../modules/home/home.component';

@NgModule({
  declarations: [
    EcommerceComponent,
    HomeComponent,
    PostsComponent],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    SharedModule
  ]
})
export class EcommerceModule { }
