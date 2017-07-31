import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from "@angular/material";
import { TextboxComponent } from './textbox/textbox.component';
@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [TextboxComponent]
})
export class ControlModule { }
