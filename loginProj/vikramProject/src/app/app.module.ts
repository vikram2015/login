import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { headerInterceptor } from './shared/interceptors/header.interceptor';
import { ResponseInterceptor } from './shared/interceptors/response.interceptor';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSidenavModule} from '@angular/material/sidenav';
import { NavigationModule } from './navigation/navigation.module';
import { ButtonModule } from 'primeng/button';
import { ToastService } from './common-module/toast-message/toast/toast.service';
import { CommonModuleModule } from './common-module/common-module.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
export const httpInterceptorProviders = [
  {
    provide: HTTP_INTERCEPTORS, useClass: headerInterceptor, multi: true
  },
  {
    provide: HTTP_INTERCEPTORS, useClass: ResponseInterceptor, multi: true
  }
]
@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSidenavModule,
    NavigationModule,
    ButtonModule,
    CommonModuleModule
  ],
  providers: [httpInterceptorProviders, ToastService],
  bootstrap: [AppComponent]
})
export class AppModule { }
