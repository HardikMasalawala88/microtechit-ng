import { ThemeServiceService } from './../../theme-service.service';
import { Component, OnInit, HostListener } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public themeService: ThemeServiceService) { }

  menuvariable: boolean = true;
  service: boolean = false;
  isActive: boolean = false;
  isCollapsed: boolean = false;
  currentPage:string = '';
  currentScrollVar: string = '';
  hostAppURL = environment.hostAppURL;

  @HostListener('document:scroll')
  scrollfunction() {
    if (document.documentElement.scrollTop < 840) {
      this.currentScrollVar = "home";
      this.currentPage = '';
    }
    else if (document.documentElement.scrollTop > 840 && document.documentElement.scrollTop < 2100) {
      this.currentScrollVar = "services";
      this.currentPage = '';
    }
    else if (document.documentElement.scrollTop > 2100 && document.documentElement.scrollTop < 3100) {
      this.currentScrollVar = "aboutUs";
      this.currentPage = '';
    }
    else if (document.documentElement.scrollTop > 3100 && document.documentElement.scrollTop < 3750) {
      this.currentScrollVar = "portfolio";
      this.currentPage = '';
    }
    else if (document.documentElement.scrollTop > 3750 && document.documentElement.scrollTop < 4350) {
      this.currentScrollVar = "testimonial";
      this.currentPage = '';
    }
    else if (document.documentElement.scrollTop > 4350) {
      this.currentScrollVar = "contactUs";
      this.currentPage = '';
    }
    else {
      this.currentScrollVar = '';
    }
  }

  ngOnInit(): void { }

  services() {
    this.service = true
  }

  activate() {
    this.isActive = !this.isActive
  }

  changeTheme() {
    this.isActive = !this.isActive
    this.themeService.changeTheme(this.isActive)
  }

  activeItem(val: string) {
    this.currentPage = val;
  }

  themeColor(val: any) {
    if ((this.isActive === false && this.currentPage === val) || (this.isActive === false && this.currentScrollVar === val)) {
      return 'bright'
    }
    else if ((this.isActive === true && this.currentPage === val) || (this.isActive === true && this.currentScrollVar === val))
      return 'deam';
    else
      return '';
  }
}


