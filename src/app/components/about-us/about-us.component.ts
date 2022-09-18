import { ThemeServiceService } from './../../theme-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  isActive: boolean = false;

  constructor(private themeService: ThemeServiceService) { }

  ngOnInit(): void {
    this.themeService.isActive$.subscribe(val => this.isActive = val);
  }
}
