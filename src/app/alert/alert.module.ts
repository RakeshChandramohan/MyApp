import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert/alert.component';
import { AlertDirective } from './alert.directive';
import { SnackBarComponent } from "app/alert/alert/snackbar.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AlertComponent, AlertDirective,SnackBarComponent ],
  exports:[AlertDirective,SnackBarComponent],
  entryComponents: [ SnackBarComponent]
})
export class AlertModule { }
