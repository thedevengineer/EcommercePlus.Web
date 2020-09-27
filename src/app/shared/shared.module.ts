import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component'
import { SidebarComponent } from './components/sidebar/sidebar.component'
import { FooterComponent } from './components/footer/footer.component'
import { RouterModule } from '@angular/router'
import { FlexLayoutModule } from '@angular/flex-layout';
import { CardComponent } from './components/card/card.component'

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    CardComponent

  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    CardComponent

  ]
})
export class SharedModule { }
