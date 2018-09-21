import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { DragulaModule } from 'ng2-dragula';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';

import { AppComponent } from './app.component';
import { BoardComponent } from './modules/board/board.component';
import { CardComponent } from './modules/card/card.component';
import { ActivityComponent } from './modules/items/activity/activity.component';;
import { RoutingModule } from './routes/routing.module';




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
    FormsModule,
    HttpModule,
    CommonModule,
    RoutingModule
],
  exports:[
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
