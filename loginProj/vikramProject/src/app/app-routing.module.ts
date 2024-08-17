import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivateFn } from '@angular/router';
import { authGuard } from './guard/auth.guard';
import { adminRoleGuard } from './guard/adminRole.guard';
import { candidateRoleGuard } from './guard/candidate-role.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./authorization/authorization.module').then(
        (m) => m.AuthorizationModule
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./authorization/authorization.module').then(
        (m) => m.AuthorizationModule
      ),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
    canActivate: [authGuard],
  },
  {
    path: 'candidate',
    loadChildren: () =>
      import('./candidate/candidate.module').then((m) => m.CandidateModule),
    canActivate: [authGuard, candidateRoleGuard],
    data: {
      role: 'candidate',
    },
  },
  {
    path: 'hr',
    loadChildren: () =>
      import('./human-resource/human-resource.module').then(
        (m) => m.HumanResourceModule
      ),
    canActivate: [authGuard, adminRoleGuard],
    data: {
      role: 'hr',
    },
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

// ,{ enableTracing: true }
