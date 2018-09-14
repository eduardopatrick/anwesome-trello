import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BoardComponent } from './modules/board/board.component';
import { ActivityListComponent } from './modules/cards/activity-list/activity-list.component';
import { ActivityComponent } from './modules/items/activity/activity.component';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';


@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    ActivityListComponent,
    ActivityComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
