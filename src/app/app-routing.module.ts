import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FleetComponent } from './fleet/fleet.component';
import { WorkComponent } from './work/work.component';
import { NavibarComponent } from './statistics/components/navibar/navibar.component';
import { StatisticsComponent } from './statistics/components/statistics-dashboard/statistics.component';
import { HomeComponent } from './home/home.component';
import { BreadcrumbComponent } from 'xng-breadcrumb';

// const routes: Routes = [
//   {path: 'home', component : HomeComponent,
//   // children:
//   //   [{ path: 'navigation', component: MainNavibarComponent,}]  
//   },
//   {path: 'fleet', component : FleetComponent},
//   {path: 'work', component : WorkComponent},
//   // {path: 'statistics', component : StatisticsComponent},
//   {path: 'Statistics', loadChildren: ()=> import('./statistics/statistics.module').then((m)=> m.StatisticsModule)},

// ];

const routes: Routes = [
  
  {path: 'home', component : HomeComponent},
  {path: 'fleet', component : FleetComponent},
  {path: 'work', component : WorkComponent},
  {path: 'Statistics', loadChildren: ()=> import('./statistics/statistics.module').then((m)=> m.StatisticsModule)},
  {path: 'breadcrumbs', component : BreadcrumbComponent}
];
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
