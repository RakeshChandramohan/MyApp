import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert/alert.component'; 
import { MaterialModule } from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [ AlertComponent],
  exports:[AlertComponent ],
  entryComponents: [  ]
})
export class AlertModule { }
