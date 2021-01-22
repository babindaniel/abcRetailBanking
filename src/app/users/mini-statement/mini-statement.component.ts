import { Component, OnInit } from '@angular/core';
import { SharedService } from './../../services/shared.service';

@Component({
  selector: 'app-mini-statement',
  templateUrl: './mini-statement.component.html',
  styleUrls: ['./mini-statement.component.scss']
})
export class MiniStatementComponent implements OnInit {

  columnDefs = [
    { field: 'name' },
    { field: 'status' },  
    { field: 'amount' },   
  ];
  
  rowData = [
    { name: 'sam', status: 'debit', amount: 4500 },
    { name: 'ram', status: 'credit', amount: 2000 },
    { name: 'tom', status: 'debit', amount: 430 },
    { name: 'jerry', status: 'debit', amount: 8500 },
    { name: 'danny', status: 'credit', amount: 890 },
    { name: 'peter', status: 'debit', amount: 540 },
    { name: 'david', status: 'debit', amount: 2500 },
    { name: 'paul', status: 'credit', amount: 1500 },
    { name: 'smith', status: 'debit', amount: 100 }
];
  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {

    this.sharedService.navBarStatus('dashboard');
  }

}
