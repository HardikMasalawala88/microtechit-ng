import { AdminService } from './../../admin.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  faLeft = faChevronLeft

  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit(): void {
  }

  form: FormGroup = new FormGroup({
    mobile: new FormControl(null, [Validators.required, Validators.minLength(10)])
  })

  onSubmit(mobile : any){
    this.adminService.getMobile(mobile.mobile);
    this.router.navigateByUrl('/');
  }

}
