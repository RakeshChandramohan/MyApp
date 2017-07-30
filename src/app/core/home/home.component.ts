import { Component, OnInit } from '@angular/core';
import { AlertService } from "app/shared/services/alert.service";
@Component({
  selector: 'ra-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private alertService: AlertService) { }

    success(message: string) { 
      alert(message);
        this.alertService.success(message);
    }

    error(message: string) {
        this.alertService.error(message);
    }

    info(message: string) {
        this.alertService.info(message);
    }

    warn(message: string) {
        this.alertService.warn(message);
    }

    clear() {
        this.alertService.clear();
    }

  ngOnInit() {
  }

}
