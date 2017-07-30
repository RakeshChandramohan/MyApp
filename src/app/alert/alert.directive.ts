import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[raAlert]'
})
export class AlertDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
