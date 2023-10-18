import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminLayoutRoutingModule } from './admin-layout-routing.module';
import { AdminLayoutComponent } from './admin-layout.component';
import {
  BreadcrumsComponent,
  FooterComponent,
  HeaderComponent,
  SidebarComponent
} from './components';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToastComponent } from '@shared/components';


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    BreadcrumsComponent,
    SidebarComponent,
    AdminLayoutComponent
  ],
  imports: [
    CommonModule,
    AdminLayoutRoutingModule,
    FontAwesomeModule,
    ToastComponent,
  ],
})
export class AdminLayoutModule { }
