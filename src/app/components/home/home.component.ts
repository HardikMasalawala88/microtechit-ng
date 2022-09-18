import { ThemeServiceService } from './../../theme-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public themeService: ThemeServiceService) {}

  isActive: boolean = false;

  ngOnInit(): void {
    this.themeService.isActive$.subscribe(val => {
      this.isActive = val;
    })
  }
}
