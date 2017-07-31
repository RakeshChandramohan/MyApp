/* Angular modules */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MaterialModule} from '@angular/material';


/* My Components */
import { AuthComponent } from './auth/auth.component';
import { CoreModule } from "app/core/core.module"; 
import { AlertModule } from "app/alert/alert.module";

import { MdInputModule ,MdButtonModule } from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    MaterialModule, 
    FormsModule,
    AlertModule,
    CoreModule,
    MdInputModule ,MdButtonModule 
  ],
  declarations: [AuthComponent],
  exports:[AuthComponent]
})
export class LoginModule { }
