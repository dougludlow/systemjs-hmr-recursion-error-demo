import { NgModule } from '@angular/core';
import { HashLocationStrategy, Location, LocationStrategy } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app.routing.module';
import { HomeModule } from './home/home.module';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    HomeModule
  ],
  declarations: [AppComponent],
  providers: [Location, { provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }