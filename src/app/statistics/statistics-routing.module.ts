import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageOneComponent } from './components/page-one/page-one.component';
import { MainComponent } from './components/main/main.component';
import { StatisticsComponent } from './components/statistics-dashboard/statistics.component';
import { Chart1Component } from './components/chart1/chart1.component';
import { Chart2Component } from './components/chart2/chart2.component';
import { ResearchComponent } from './components/research/research.component';
import { StatProjectComponent } from './components/stat-project/stat-project.component';

// const routes: Routes = [
//   {path: '', component : StatisticsComponent, children:[
//     { path: 'Procurement', component: MainComponent, children:[
//       { path: 'Chart1', component: Chart1Component},
//       { path: 'Chart2', component: Chart2Component},
//       { path: 'Research', component: ResearchComponent, children:[
//       { path: 'Project1', component: Chart1Component},
//       { path: 'pageone', component: PageOneComponent},
//     ]}
      
//     ]},
//     { path: 'Research', component: ResearchComponent, children:[
//       { path: 'Project1', component: Chart1Component},
//       { path: 'pageone', component: PageOneComponent},
//     ]}
   
//     // { path: 'pageone', component: PageOneComponent},
//   ]},

// ];

const routes: Routes = [
  
  {path: '', component : StatisticsComponent, children:[
    { path: 'Procurement', component: MainComponent, children:[
      { path: 'Chart1', component: Chart1Component},
      { path: 'Chart2', component: Chart2Component},
      { path: 'Research', component: ResearchComponent, children:[
      { path: 'Project1', component: Chart1Component},
      { path: 'pageone', component: PageOneComponent},
    ]}
      
    ]},{ path: 'Project', component: StatProjectComponent}
    
  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatisticsRoutingModule { }
