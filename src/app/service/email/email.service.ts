import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment.developer';
import { map, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class EmailService {

  mailSent: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor(private httpreq: HttpClient) { }

  SendMessage(param: any): Observable<any> {
    let emailUrl = environment.mailFormURL;
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    var formData: any = new FormData();
    formData.append("name", param.name);
    formData.append("replyto", param.email);
    formData.append("message", param.messages);
    return this.httpreq.post<any>(emailUrl,
      { name: param.name, replyto: param.email, message: param.messages },
      { 'headers': headers }).pipe(map(response => {
        return response;
      }));
    // return this.httpreq.post(emailUrl, body, headers);
  } 
}
