import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CasesComponent } from '../cases/cases.component';
import { CasesDetailsComponent } from '../cases-details/cases-details.component';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { TableModule } from 'primeng/table';
import { ProgressBarModule } from 'primeng/progressbar';
import { TagModule } from 'primeng/tag';
import { SliderModule } from 'primeng/slider';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { casesReducer } from 'src/app/store/cases.reducer';
import { CasesDataEffects } from 'src/app/store/cases.effects';



@NgModule({
  declarations: [
    HomeComponent,
    CasesComponent,
    CasesDetailsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    TableModule,
    ProgressBarModule,
    TagModule,
    SliderModule,
    DropdownModule,
    MultiSelectModule,
    StoreModule.forFeature('cases', casesReducer),
    EffectsModule.forFeature([CasesDataEffects])
  ]
})
export class HomeModule {
  constructor() {
  }
}
