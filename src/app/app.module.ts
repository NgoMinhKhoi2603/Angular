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
import {FoodComponent} from "./food/food.component";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Food2Component} from "./food/food2.component";

//khai bao cac page trong website
const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'thedu', component: TheduComponent},
  {path: 'ngominhkhoi', component: NgominhkhoiComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'food', component: FoodComponent},
  {path: 'food2', component: Food2Component},
]
@NgModule({
  declarations: [
    AppComponent, StudentComponent,ClassroomComponent,HomeComponent,LoginComponent, FoodComponent, Food2Component,
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(appRoutes),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
