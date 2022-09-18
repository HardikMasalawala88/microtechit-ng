import { ThemeServiceService } from './theme-service.service';
import { environment } from 'src/environments/environment';
import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'microtech';
  isActive: boolean = false;

  hostURL = environment.hostURL;
  username = environment.username;
  token = environment.token;

  constructor(private themeService: ThemeServiceService){}

  ngOnInit(){
    AOS.init();
    this.themeService.isActive$.subscribe(val => this.isActive = val)
    console.log(this.hostURL);
    console.log(this.username);
    console.log(this.token);
  }
}
