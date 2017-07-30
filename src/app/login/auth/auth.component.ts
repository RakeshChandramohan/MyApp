import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from 'app/shared/services/services.module';
import { IProfileModel } from "../../shared/models/iprofile-model";

@Component({
  selector: 'ra-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  UserName: string;
  Password: string;
  dataJson: any;
  profileModel: IProfileModel;
  items: any;
  eMsg: string;
  isError: boolean;
  constructor(private _router: Router,
    private _route: ActivatedRoute,
    private _login: LoginService) {
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
    if (this.UserName == null || this.UserName == "") { alert("Enter UserName"); return false; }
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
