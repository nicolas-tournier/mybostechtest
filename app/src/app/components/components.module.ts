import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CasesComponent } from './cases/cases.component';
import { CasesDetailsComponent } from './cases-details/cases-details.component';
import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './home/home-routing.module';



@NgModule({
  declarations: [
    HomeComponent,
    CasesComponent,
    CasesDetailsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class ComponentsModule { }
