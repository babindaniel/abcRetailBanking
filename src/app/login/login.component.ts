import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import * as loginData from './../../assets/json/login.json';
import { SharedService } from './../services/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isvalidCredentials : boolean = true;
  loginForm!: FormGroup;
  isSubmitted = false;
  // loginResponse = loginData;
  loginResponse: any = (loginData as any).default;

  constructor(private formBuilder: FormBuilder, 
    private router: Router,
    private sharedService: SharedService) { }

  ngOnInit() {

    // this.sharedService.navBarStatus('login');    
    
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', Validators.required]
    });

  }

  ngAfterViewInit() {

    this.sharedService.navBarStatus('login');
  }
  get f() { return this.loginForm.controls; }

  signIn() {

    this.isSubmitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    if(this.loginForm.valid) {
      // console.log('loginResponse-->',this.loginResponse.default);
      let loginResLength = this.loginResponse.length;
      localStorage.setItem('username', this.loginForm.value.email);
      for(let i=0; i<loginResLength; i++) {
        if(this.loginResponse[i].username == this.loginForm.value.email && this.loginResponse[i].password == this.loginForm.value.password) {
          console.log(this.loginResponse[i].role);
          this.isvalidCredentials = true;
          this.sharedService.navBarStatus('dashboard');
          if(this.loginResponse[i].role === 'admin') {
            //Navigate to Admin Dashboard
            this.router.navigate(['admin/dashboard']);
          } else {
            this.router.navigate(['users/dashboard']);
          }
        } else {
          this.isvalidCredentials = false;
        }
      }
    }
  }

}
