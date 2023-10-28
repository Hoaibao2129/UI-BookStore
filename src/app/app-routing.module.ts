import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StaffComponentComponent } from './components/staff-component/staff-component.component';
import { RoleComponentComponent } from './components/role-component/role-component.component';

export const routes: Routes = [
  {path: "dashboard" , component: DashboardComponent },
  {path: "role",component :RoleComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
