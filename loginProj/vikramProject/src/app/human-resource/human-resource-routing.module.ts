import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidateListComponent } from '../candidate/candidate-list/candidate-list.component';

const routes: Routes = [
  {
    path: 'candidate-list',
    component: CandidateListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HumanResourceRoutingModule { }
