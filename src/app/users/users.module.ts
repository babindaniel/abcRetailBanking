import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountsComponent } from './accounts/accounts.component';
import { MiniStatementComponent } from './mini-statement/mini-statement.component';
import { Routes, RouterModule } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';

const routes: Routes = [  
  {   path: '',   component: DashboardComponent   },
  {   path: 'dashboard',   component: DashboardComponent   },
  {   path: 'accounts',   component: AccountsComponent   },
  {   path: 'ministatement',   component: MiniStatementComponent   },
];

@NgModule({
  declarations: [DashboardComponent, AccountsComponent, MiniStatementComponent],
  imports: [
    RouterModule.forChild(routes),
    AgGridModule.withComponents([]),
    CommonModule
  ],
  exports: [RouterModule]
})
export class UsersModule { }
