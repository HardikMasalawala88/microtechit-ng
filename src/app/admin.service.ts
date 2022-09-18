import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor() { }

  mobNo: BehaviorSubject<number> = new BehaviorSubject<number>(9558883554);

  mobno$ = this.mobNo.asObservable();

  getMobile(No: number){
    localStorage.setItem('Mobile', JSON.stringify(No));
    this.mobNo.next(No);
  }
}
