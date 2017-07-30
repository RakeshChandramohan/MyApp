import { AlertDirective } from './alert.directive';
import { ViewContainerRef } from "@angular/core/src/core";


describe('AlertDirective', () => {
  let param: ViewContainerRef 
  it('should create an instance', () => {
    const directive = new AlertDirective(param);
    expect(directive).toBeTruthy();
  });
});
