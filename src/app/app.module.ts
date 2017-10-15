import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SwitchgroupComponent } from './switchgroup/switchgroup.component';

import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    SwitchgroupComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
