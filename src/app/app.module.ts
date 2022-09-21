import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {StudentComponent} from "./student/student.component";
import {ClassroomComponent} from "./classroom/classroom.component";
import {FormsModule} from "@angular/forms";
import {HomeComponent} from "./pages/home/home.component";
import {LoginComponent} from "./pages/login/login.component";
import {Route, RouterModule, Routes} from "@angular/router";
import {TheduComponent} from "./pages/thedu/thedu.component";
import {NgominhkhoiComponent} from "./pages/ngominhkhoi/ngominhkhoi.component";
import {RegisterComponent} from "./pages/register/register.component";

//khai bao cac page trong website
const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'thedu', component: TheduComponent},
  {path: 'ngominhkhoi', component: NgominhkhoiComponent},
  {path: 'register', component: RegisterComponent},
]
@NgModule({
  declarations: [
    AppComponent, StudentComponent,ClassroomComponent,HomeComponent,LoginComponent
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
