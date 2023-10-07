import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import {PanelMenuModule} from 'primeng/panelmenu';
import {BreadcrumbModule} from 'xng-breadcrumb'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavibarComponent } from './statistics/components/navibar/navibar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FleetComponent } from './fleet/fleet.component';
import { WorkComponent } from './work/work.component';

import { StatisticsComponent } from './statistics/components/statistics-dashboard/statistics.component';
import { HomeComponent } from './home/home.component';
import { MenulistService } from './menulist.service';
import { StatBreadcrumbComponent } from './statistics/components/stat-breadcrumb/stat-breadcrumb.component';
import { MainNavibarComponent } from './main-navibar/main-navibar.component';
import { StatProjectComponent } from './statistics/components/stat-project/stat-project.component';



@NgModule({
  declarations: [
    AppComponent,
    NavibarComponent,
    ToolbarComponent,
    FleetComponent,
    WorkComponent,
    StatisticsComponent,
    HomeComponent,
    MainNavibarComponent,
    StatBreadcrumbComponent,
    StatProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    BrowserAnimationsModule,
    MenuModule,
    ButtonModule,
    SidebarModule,
    PanelMenuModule,
    BreadcrumbModule,
  ],
  providers: [MenulistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
