import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobAppliedComponent } from './job-applied/job-applied.component';

const routes: Routes = [
  {
    path: 'status-list',
    component: JobAppliedComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatusRoutingModule { }
