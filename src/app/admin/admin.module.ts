import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardModule } from 'primeng/card';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { ManagePropertiesComponent } from './manage-properties/manage-properties.component';
import { ManageInvestorsComponent } from './manage-investors/manage-investors.component';



@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    CardModule
  ],
  declarations: [AdminDashboardComponent, AdminComponent, ManagePropertiesComponent, ManageInvestorsComponent]
})
export class AdminModule { }
