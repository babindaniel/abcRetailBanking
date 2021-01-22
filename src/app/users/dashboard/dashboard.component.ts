import { Component, OnInit } from '@angular/core';
import { SharedService } from './../../services/shared.service';
import * as userDashboard from './../../../assets/json/user-dashboard.json';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  dashboardData: any = (userDashboard as any).default;
  getdashboardData: any;
  getUsername: any;
  constructor(private sharedService: SharedService,
    private router: Router,) { }

  ngOnInit(): void {

    
    this.getUsername = localStorage.getItem('username');
    this.getdashboardData = this.dashboardData[0][this.getUsername];
  }

  ngAfterViewInit() {
    this.sharedService.navBarStatus('dashboard');
  }

  account() {
    this.router.navigate(['users/accounts'])
  }
}
