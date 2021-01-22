import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from './../services/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  getUsername: any;

  constructor(private router: Router,private sharedService: SharedService) { }

  ngOnInit(): void {

    this.getUsername = localStorage.getItem('username');
  }

  logout() {
    this.sharedService.navBarStatus('login');
    localStorage.clear();
    this.router.navigate(['/'])
  }

}
