
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BackendHeaderComponent } from './backend-header/backend-header.component';
import { BackendFooterComponent } from './backend-footer/backend-footer.component';
import { MessageComponent } from './message/message.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BackendHeaderComponent,
    BackendFooterComponent,
    MessageComponent,
    
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    BackendHeaderComponent,
    BackendFooterComponent,
    MessageComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
