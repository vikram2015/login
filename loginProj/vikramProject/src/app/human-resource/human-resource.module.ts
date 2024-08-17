import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HumanResourceRoutingModule } from './human-resource-routing.module';
import { CandidateListComponent } from './components/candidate-list/candidate-list.component';
import { JobListComponent } from './components/job-list/job-list.component';


@NgModule({
  declarations: [
    CandidateListComponent,
    JobListComponent
  ],
  imports: [
    CommonModule,
    HumanResourceRoutingModule
  ]
})
export class HumanResourceModule { }
