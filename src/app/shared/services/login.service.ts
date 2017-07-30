import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Injectable()
export class LoginService {
  baseUrl: string;
  constructor(private _http: Http) {
    this.baseUrl = "http://127.0.0.1/app6/api/";
  }
  Authenticate(contoller: string, action: any, dataJson: string): Observable<any> {
    let authtoken = localStorage.getItem('authtoken');
    let headers = new Headers({ 'Content-Type': 'application/json' });
    if (authtoken) {
      headers.append("Authorization", 'Token ' + authtoken)
    }
    headers.append("Accept", 'application/json');
    headers.append("Access-Control-Allow-Origin", '*');
    return this._http
      .post(`${this.baseUrl}/${contoller}/${action}`, dataJson, { headers: headers })
      .map((response) =>   response.json());
  }

}
