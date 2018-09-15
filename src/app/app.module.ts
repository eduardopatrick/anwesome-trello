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


@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    ActivityListComponent,
    ActivityComponent,
    ToolbarComponent,
    NewActivity,
    DeleteActivity
  ],
  imports: [
    BrowserModule,
    SweetAlert2Module.forRoot({
      buttonsStyling: false,
      customClass: 'modal-content',
      confirmButtonClass: 'btn btn-primary',
      cancelButtonClass: 'btn'
  })
],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
