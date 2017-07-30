import {Component,Input} from '@angular/core';
import {MdSnackBar} from '@angular/material';

@Component({
  selector: 'snackbar.component',
  template:  '',
})
export class SnackBarComponent {
    @Input() message:string;
  constructor(public snackBar: MdSnackBar) {
    this.snackBar.open(this.message , "action", {   duration: 2000,  });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(this.message , action, {
      duration: 2000,
    });
  }
}