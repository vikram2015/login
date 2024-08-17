import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobsRoutingModule } from './jobs-routing.module';
import { JobListingComponent } from './job-listing/job-listing.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    JobListingComponent,
    JobDetailsComponent
  ],
  imports: [
    CommonModule,
    JobsRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class JobsModule { }
