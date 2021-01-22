import { Component, OnInit } from '@angular/core';
import * as userAccounts from './../../../assets/json/user_accounts.json';
import { SharedService } from './../../services/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {

  accountDetails: any = (userAccounts as any).default;
  getUsername: any;
  accounts: any;

  constructor(private sharedService: SharedService,
    private router: Router) { }

  ngOnInit(): void {

    this.sharedService.navBarStatus('dashboard');
    this.getUsername = localStorage.getItem('username');
    this.accounts = this.accountDetails[0][this.getUsername];
  }

  miniStatement() {

    this.router.navigate(['users/ministatement'])
  }

}
