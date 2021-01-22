import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  private user = new BehaviorSubject<string>('login');
  castUser = this.user.asObservable();

  navBarStatus(newUser: any){
    this.user.next(newUser); 
  }
}
