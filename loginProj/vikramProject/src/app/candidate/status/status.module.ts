import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatusRoutingModule } from './status-routing.module';
import { JobAppliedComponent } from './job-applied/job-applied.component';
import { JobAppliedStatusComponent } from './job-applied-status/job-applied-status.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [
    JobAppliedComponent,
    JobAppliedStatusComponent
  ],
  imports: [
    CommonModule,
    StatusRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class StatusModule { }
