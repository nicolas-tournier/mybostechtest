import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CasesComponent } from '../cases/cases.component';
import { CasesDetailsComponent } from '../cases-details/cases-details.component';
import { HomeComponent } from './home.component';

const casesRoute: string = 'cases';
const caseDetailRoute: string = 'cases/:id';

// todo: be good to use these across the relevant components
// sadly it produces a cicular error because a component like HomeComponent
// would be importing something that's imported by the routing module.

const homeRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: casesRoute },
      { path: casesRoute, component: CasesComponent },
      { path: caseDetailRoute, component: CasesDetailsComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule]
})

export class HomeRoutingModule {
  constructor() {
  }
}
