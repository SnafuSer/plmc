import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NavComponent } from './navbar.component';


@NgModule({
  declarations: [
    NavComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [NavComponent]
})
export class AppModule { }
