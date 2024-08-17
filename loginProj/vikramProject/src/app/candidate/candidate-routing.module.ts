import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from '../guard/auth.guard';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { CandidateProfileComponent } from './components/candidate-profile/candidate-profile.component';

const routes: Routes = [
  {
    path: '',
    component: CandidateProfileComponent,
    pathMatch: 'full',
    canActivate: [authGuard],
  },
  {
    path: 'profile',
    component: CandidateProfileComponent,
  },
  {
    path: 'jobs',
    loadChildren: () => import('./jobs/jobs.module').then((m) => m.JobsModule),
    canActivate: [authGuard],
  },
  {
    path: 'status',
    loadChildren: () => import('./status/status.module').then((m) => m.StatusModule),
    canActivate: [authGuard],
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    canActivate: [authGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CandidateRoutingModule {}
