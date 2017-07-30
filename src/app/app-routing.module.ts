import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'app/core/home/home.component';
import { AuthComponent } from "app/login/auth/auth.component";


const routes: Routes = [
   {
    path: 'home',
    component: HomeComponent
  },{
    path: '',
    component:AuthComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
