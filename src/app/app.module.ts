
/* Angular Modules */
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';

/*third party Modules */
import { AppRoutingModule } from './app-routing.module';

/* My Modules */

import { LoginModule  } from './login/login.module';

/* My Components */
import { AppComponent } from './app.component';
import { CoreModule } from "app/core/core.module";
import { ServicesModule } from "app/shared/services/services.module";
import { AlertModule } from "app/alert/alert.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // FormsModule,
    // HttpModule,
    AppRoutingModule,
    LoginModule,
    CoreModule,
    AlertModule,
    ServicesModule.forRoot()
  ],
  // providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
