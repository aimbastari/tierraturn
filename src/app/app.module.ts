import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import {PanelModule} from 'primeng/panel';
import {CardModule} from 'primeng/card';
import {TableModule} from 'primeng/table';
import {TabMenuModule} from 'primeng/tabmenu';

import { AppComponent } from './app.component';
import { PropertiesComponent } from './properties/properties.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InvestorsComponent } from './investors/investors.component';
import { PropertyComponent } from './properties/property/property.component';
import { PropertyListComponent } from './properties/property-list/property-list.component';
import { PropertyService } from  './properties/shared/property.service';


@NgModule({
  declarations: [
    AppComponent,
    PropertiesComponent,
    DashboardComponent,
    InvestorsComponent,
    PropertyComponent,
    PropertyListComponent    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PanelModule,
    CardModule,
    TableModule,
    TabMenuModule,
    
    AppRoutingModule

  ],
  providers: [PropertyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
