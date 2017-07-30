import { NgModule } from '@angular/core';
import { MdToolbarModule,MdCardModule,MdSidenavModule  } from '@angular/material';


import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from "app/app-routing.module";
import { MenuComponent } from './menu/menu.component';
import { AlertModule } from "app/alert/alert.module";

@NgModule({
  imports: [
    AppRoutingModule,
    MdToolbarModule,
    MdCardModule,
    MdSidenavModule,
   AlertModule
  ],
  declarations: [HomeComponent, HeaderComponent, FooterComponent, MenuComponent],
  exports: [HomeComponent  ],
  
})
export class CoreModule { }
