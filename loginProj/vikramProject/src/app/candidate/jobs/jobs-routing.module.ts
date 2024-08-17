import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobListingComponent } from './job-listing/job-listing.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { authGuard } from '../../guard/auth.guard';
import { PageNotFoundComponent } from '../../page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: JobListingComponent
  },
  {
    path: 'job-listing',
    component: JobListingComponent
  },
  {
    path: 'job-details/:id',
    component: JobDetailsComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    canActivate: [authGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobsRoutingModule { }
