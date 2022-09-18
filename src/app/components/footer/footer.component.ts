import { AdminService } from './../../admin.service';
import { Component, OnInit } from '@angular/core';
import { faGlobe, faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import {  } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private adminService: AdminService) { }

  faGlobe = faGlobe;
  faEnvelope = faEnvelope;
  faPhone = faPhoneAlt;
  year = (new Date()).getFullYear();
  mobileNo: number = 0;

  ngOnInit(): void {
    this.adminService.mobno$.subscribe(mob => {
      if(localStorage.getItem('Mobile')){
        // this.mobileNo = JSON.parse(localStorage.getItem('Mobile'));
      }
      else{
          this.mobileNo = mob
        }
    })
  }

}
