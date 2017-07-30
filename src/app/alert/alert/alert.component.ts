import { Component, OnInit ,ComponentFactoryResolver,ViewChild} from '@angular/core';
import { MdSnackBar } from '@angular/material';

import { AlertDirective } from "app/alert/alert.directive";
import { SnackBarComponent } from "app/alert/alert/snackbar.component";

@Component({
  selector: 'ra-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent  {
  @ViewChild(AlertDirective) popup: AlertDirective;
  message: string;
    constructor(private _componentFactoryResolver: ComponentFactoryResolver) {  
    this.message = "success";
  }
  ngAfterViewInit() {
    this.loadSnackBar();
  }
  ngOnInit() { }
  loadSnackBar(){
     let componentFactory = this._componentFactoryResolver.resolveComponentFactory(SnackBarComponent);
    let viewContainerRef = this.popup.viewContainerRef;
    viewContainerRef.clear();
    let componentRef = viewContainerRef.createComponent(componentFactory);
    componentRef.instance.openSnackBar(this.message,this.message)
  }
}


