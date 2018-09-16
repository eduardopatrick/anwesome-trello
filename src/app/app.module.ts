import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BoardComponent } from './modules/board/board.component';
import { ActivityListComponent } from './modules/cards/activity-list/activity-list.component';
import { ActivityComponent } from './modules/items/activity/activity.component';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import { NewActivity } from './shared/buttons/new-activity/new-activity.component';
import { DeleteActivity } from './shared/buttons/delete-activity/delete-activity.component';
import { NewActivityList } from './shared/buttons/new-activity-list/new-activity-list.component';
import { NewBoard } from './modules/board/new-board/new-board.component';
import { DeleteActivityList } from './modules/cards/activity-list/delete-activity-list/delete-activity-list.component';


@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    ActivityListComponent,
    ActivityComponent,
    ToolbarComponent,
    NewActivity,
    DeleteActivity,
    DeleteActivityList,
    NewActivityList,
    NewBoard
  ],
  imports: [
    BrowserModule,
    SweetAlert2Module.forRoot()
],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
