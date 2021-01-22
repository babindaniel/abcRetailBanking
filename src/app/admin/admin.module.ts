import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';


const routes: Routes = [  
  {   path: '',   component: DashboardComponent   },
  {   path: 'dashboard',   component: DashboardComponent   },
];

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    RouterModule.forChild(routes),
    AgGridModule.withComponents([]),
    CommonModule
  ],
  exports: [RouterModule]
})

export class AdminModule { }
