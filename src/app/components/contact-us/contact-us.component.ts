import { AdminService } from './../../admin.service';
import { Component, OnInit } from '@angular/core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { ThemeServiceService } from 'src/app/theme-service.service';
import { EmailService } from 'src/app/service/email/email.service';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  faEnvelope = faEnvelope;
  faPhone = faPhoneAlt;
  faMap = faMapMarkerAlt;

  isActive: boolean = false;
  ngName: string = '';
  ngEmail: string= '';
  ngWebsite: string= '';
  ngMsg: string= '';
  ngPhoneNumber: string= '';
  mobileNo: number = 0;
  submitted = false;
  form: FormGroup;

  constructor(
    private themeService: ThemeServiceService,
    private adminService: AdminService,
    private emailService: EmailService,
    private formBuilder: FormBuilder) { 

      this.form = this.formBuilder.group({
        ngName: new FormControl('', Validators.required),
        ngEmail: new FormControl('', [Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
        ngWebsite: new FormControl('', [Validators.required,Validators.pattern("^((https?|ftp|smtp):\\/\\/)?(www.)?[a-z0-9]+(\\.[a-z]{2,}){1,3}(#?\\/?[a-zA-Z0-9#]+)*\\/?(\\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$")]),
        ngPhoneNumber: new FormControl('', [Validators.required,Validators.pattern("^(?:(?:\\+?1\\s*(?:[.-]\\s*)?)?(?:\\(\\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\\s*\\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\\s*(?:[.-]\\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\\s*(?:[.-]\\s*)?([0-9]{4})(?:\\s*(?:#|x\\.?|ext\\.?|extension)\\s*(\\d+))?$")]),
        ngMsg: new FormControl('', [Validators.required]),
      })
    }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  ngOnInit(): void {
    
    this.themeService.isActive$.subscribe(val => this.isActive = val);
    this.adminService.mobno$.subscribe(mob => {
      var localMob = localStorage.getItem('Mobile');
      if(localMob){
        this.mobileNo = JSON.parse(localMob);
      }
      else{
          this.mobileNo = mob
        }
    })
  }
  onSubmit() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }
    this.sendmail();
    alert("Form is Submitted!");

  }

  onClear() {
    this.form.reset();
  }
 
  sendmail() {
    this.ngMsg = "We have inquiry from $from  for  $website  \nMessage we have received below message \n"
      + "\n\n<strong>Person Name:</strong> $name"
      + "\n\n<strong>Contact Number:</strong> $phone"
      + "\n\n<strong>Message:</strong> \n$txtMessage";
    let reqObj = {
      name: this.ngName,
      email: this.ngEmail,
      message: this.ngMsg,
    }
    this.emailService.SendMessage(reqObj).subscribe(data => {
      console.log(data);
      this.onClear();
    })
    // this.emailService.SendMessage(reqObj).subscribe(data => {
    //   console.log(data);
    // })
  }

}
