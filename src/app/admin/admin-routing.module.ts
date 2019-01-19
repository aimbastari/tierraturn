import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ManageInvestorsComponent } from './manage-investors/manage-investors.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ManagePropertiesComponent } from './manage-properties/manage-properties.component';



const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
        {path:'investors', component: ManageInvestorsComponent},
        {path:'properties', component: ManagePropertiesComponent},
        {path:'', component: AdminDashboardComponent}
    ]

  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
