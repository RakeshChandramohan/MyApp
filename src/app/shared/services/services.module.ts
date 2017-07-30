import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { LoginService } from 'app/shared/services/login.service'
import { AlertService } from 'app/shared/services/alert.service'
@NgModule({
  imports: [
    HttpModule
  ],
})
export class ServicesModule { 
   /*  It can be used in Base/Root/App modules  */
  static forRoot() {
    return {
      ngModule: ServicesModule,
      providers: [
        LoginService,
        AlertService
      ]
    };
  }
}
export{
  LoginService,
  AlertService
}
