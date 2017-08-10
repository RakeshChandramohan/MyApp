/* Angular modules */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


/* My Components */
import { AuthComponent } from './auth/auth.component';
import { CoreModule } from "app/core/core.module"; 
import { AlertModule } from "app/alert/alert.module";

import { MdInputModule ,MdButtonModule ,MdCardModule,} from '@angular/material';
@NgModule({
  imports: [
    CommonModule, 
    FormsModule,
    AlertModule,
    CoreModule,
    MdInputModule ,MdButtonModule ,MdCardModule
  ],
  declarations: [AuthComponent],
  exports:[AuthComponent]
})
export class LoginModule { }
