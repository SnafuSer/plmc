import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { MnFullpageModule } from 'ngx-fullpage';
import { NavComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent, NavComponent
  ],
  imports: [
    BrowserModule,
    MnFullpageModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
