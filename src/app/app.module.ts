import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CommonModule } from '@angular/common'
import { RoleComponentComponent } from './components/role-component/role-component.component';
import { StaffModuleModule } from './components/staff-component/staff-module.module';
import { CashierModule } from './components/cashier/cashier.module';
import { BookModule } from './components/book/book.module'


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    RoleComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    StaffModuleModule,
    CashierModule,
    BookModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
