import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeServiceService {

  constructor() { }

  private isActive = new Subject<boolean>();

  isActive$ = this.isActive.asObservable();

  changeTheme(val: boolean){
    this.isActive.next(val);
  }
}
