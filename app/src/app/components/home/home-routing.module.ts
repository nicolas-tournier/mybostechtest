import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CasesComponent } from '../cases/cases.component';
import { CasesDetailsComponent } from '../cases-details/cases-details.component';
import { HomeComponent } from './home.component';

const homeRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'cases' },
      { path: 'cases', component: CasesComponent },
      { path: 'cases/:id', component: CasesDetailsComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule],
})

export class HomeRoutingModule {
  constructor() {
  }
}
