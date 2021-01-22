import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SharedService } from './services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  
  title = 'abcRetailBank'; 
  user:any;
  enableNavBar: boolean = false;

  constructor(private sharedService: SharedService){}
  
  ngOnInit() {  
   
  }

  ngAfterViewInit() {

    let x = this.sharedService.castUser.subscribe((user: any) =>{
      console.log('appcomp-->',user);
      if(user == 'login') {
        this.enableNavBar = false;
      } else {
        this.enableNavBar = true;
      }
    });
  }
}
