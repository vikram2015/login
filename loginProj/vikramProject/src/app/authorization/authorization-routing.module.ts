import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterationComponent } from './components/registeration/registeration.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
{
  path: 'login',
  component: LoginComponent,
  title: 'Login'
},
{
  path: 'register',
  component: RegisterationComponent,
  title: 'Registration'
},
// {
//   path: '**',
//   redirectTo: 'login',
// }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorizationRoutingModule { }
