import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonModuleRoutingModule } from './common-module-routing.module';
import { ToastComponent } from './toast-message/toast/toast.component';
import { ToastModule } from 'primeng/toast';


@NgModule({
  declarations: [
    ToastComponent
  ],
  imports: [
    CommonModule,
    CommonModuleRoutingModule,
    ToastModule
  ],
  exports:[ToastComponent],
})
export class CommonModuleModule { }
