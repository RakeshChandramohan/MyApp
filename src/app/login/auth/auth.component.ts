import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from 'app/shared/services/services.module';
import { IProfileModel } from "../../shared/models/iprofile-model";
import { AlertService } from "app/shared/services/alert.service";
import {FormControl, Validators} from '@angular/forms';
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
  selector: 'ra-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
    emailFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(EMAIL_REGEX)]);
  UserName: string;
  Password: string;
  dataJson: any;
  profileModel: IProfileModel;
  items: any;
  eMsg: string;
  isError: boolean;
  constructor(private _router: Router,
    private _route: ActivatedRoute,
    private _login: LoginService,
    private  _alertService: AlertService) {
    this.isError = false;
  }

  ngOnInit() {
    this.Password = "";
    this.UserName = "";
  }
  Login() {
    if (!this.loginValdation()) { return false; }
    this.dataJson = { LoginId: this.UserName, Password: this.Password };
    if (!this.loginServerValdation()) { return false; }
    console.log(this.profileModel);
    this._router.navigateByUrl("home");
  }
  private loginValdation() {
    if (this.UserName == null || this.UserName == "") {  this._alertService.error("Enter UserName"); return false; }
    if (this.Password == null || this.Password == "") { alert("Enter Password"); return false; }
    return true;
  }
  private loginServerValdation() {
    this._route.params
      .switchMap(() => {
        return this._login.Authenticate('Login', 'Authentication', this.dataJson);
      })
      .subscribe(
      (items: any) => {
        if (items.Msg != "") { alert(items.Msg); }
        if (items.Status == 0) { return false; }
        console.log(items);
        Object.assign(this.profileModel, items.Data);
        console.log(this.profileModel);         
      },
      error => {
        this.eMsg = `Fetching feed 2 ${error}`;
        this.isError = false;
      }
      );

    
    return true;
  }
}
