import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
@Injectable()
export class AlertService {

  constructor() { }

  // Observable string sources
  private componentMethodCallSource = new Subject<any>();
  
  // Observable string streams
  componentMethodCalled$ = this.componentMethodCallSource.asObservable();

  callComponentMethod(val) {
    this.componentMethodCallSource.next();
  }
}
