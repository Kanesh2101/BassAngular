import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatisticsRoutingModule } from './statistics-routing.module';
import { PageOneComponent } from './components/page-one/page-one.component';
import { MainComponent } from './components/main/main.component';
import { Chart1Component } from './components/chart1/chart1.component';
import { Chart2Component } from './components/chart2/chart2.component';
import { ResearchComponent } from './components/research/research.component';



@NgModule({
  declarations: [
    PageOneComponent,
    MainComponent,
    Chart1Component,
    Chart2Component,
    ResearchComponent,
  ],
  imports: [
    CommonModule,
    StatisticsRoutingModule
  ]
})
export class StatisticsModule { }
