import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {PropertiesComponent} from './properties/properties.component'; 
import {InvestorsComponent} from './investors/investors.component'; 


const routes: Routes = [
  {
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule'
  },
  {path: 'properties', component: PropertiesComponent},
  {path: 'investors', component: InvestorsComponent}

];


@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(
      routes,   
      { 
        enableTracing: true 
      }
    )
  ]
})
export class AppRoutingModule { }
