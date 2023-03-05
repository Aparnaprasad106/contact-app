import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllcontactsComponent } from './allcontacts/allcontacts.component';
import { AddcontactsComponent } from './addcontacts/addcontacts.component';
import { EditcontactsComponent } from './editcontacts/editcontacts.component';
import { ViewcontactsComponent } from './viewcontacts/viewcontacts.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import {     HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './pipes/filter.pipe'
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    AllcontactsComponent,
    AddcontactsComponent,
    EditcontactsComponent,
    ViewcontactsComponent,
    PageNotFoundComponent,
    NavbarComponent,
    FilterPipe
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
