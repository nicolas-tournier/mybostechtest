import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./components/components.module').then(m => m.ComponentsModule)
  },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { scrollPositionRestoration: 'top', anchorScrolling: "enabled" })],
  exports: [RouterModule],
})

export class AppRoutingModule { }
