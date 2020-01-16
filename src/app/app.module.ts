import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from '../pages/user/user.component';
import { FormsModule } from '@angular/forms';
import { AddUserComponent } from '../pages/add-user/add-user.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
