import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { DragulaModule } from 'ng2-dragula';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';

import { AppComponent } from './app.component';
import { BoardComponent } from './modules/board/board.component';
import { CardComponent } from './modules/card/card.component';
import { ActivityComponent } from './modules/items/activity/activity.component';
import { RoutingModule } from './routes/routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule, MatAutocompleteModule, MatFormFieldModule, MatCheckboxModule, MatSelectModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    CardComponent,
    ActivityComponent,
  ],
  imports: [
    BrowserModule,
    SweetAlert2Module.forRoot(),
    DragulaModule.forRoot(),
    ReactiveFormsModule,
    HttpModule,
    CommonModule,
    RoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatSelectModule
],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
