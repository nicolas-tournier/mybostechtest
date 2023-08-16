import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CasesComponent } from '../cases/cases.component';
import { CasesDetailsComponent } from '../cases-details/cases-details.component';

const homeRoutes: Routes = [
  { path: '', redirectTo: 'cases', pathMatch: 'full' },
  { path: 'cases', component: CasesComponent },
  { path: 'cases/:id', component: CasesDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule],
})

export class HomeRoutingModule { }
