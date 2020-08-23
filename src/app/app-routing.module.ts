import { Error404Component } from './modules/errors/error404/error404.component';
import { AdminComponent } from './layouts/admin/admin.component';
import { EcommerceComponent } from './layouts/ecommerce/ecommerce.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { PostsComponent } from './modules/posts/posts.component';
import { LoginComponent } from './modules/login/login.component';
import { MainComponent } from './layouts/main/main.component';
import { Error401Component } from './modules/errors/error401/error401.component';


const routes: Routes = [{
  path:'',
  component: EcommerceComponent,
  children: [{
          path:'',
          component: HomeComponent
      },
      {
          path:'posts',
          component: PostsComponent
      }]
},
{
  path: '',
  component: MainComponent,
  children: [{
    path:'login',
    component: LoginComponent
  },
  {
    path:'error_404',
    component: Error404Component
  },
  {
    path:'error_401',
    component: Error401Component
  }]
},
{
  path: 'controlcenter',
  component: AdminComponent,
  children: [{
    path:'dashboard',
    component: DashboardComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
