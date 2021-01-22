import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from './../../header/header.component';
import { SharedService } from './../../services/shared.service';
import * as allusers from './../../../assets/json/login.json';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  getAllUsers: any = (allusers as any).default;
  rowData: any;
  
  constructor(private sharedService: SharedService) { }

  columnDefs = [
    { field: 'name' },
    { field: 'email' },  
    { field: 'mobile' },    
    { field: 'username' },
    { field: 'role' },
    { field: 'status' }      
  ];

  ngOnInit(): void {

    this.rowData = this.getAllUsers;
  }

  ngAfterViewInit() {

    this.sharedService.navBarStatus('dashboard');
  }
}
