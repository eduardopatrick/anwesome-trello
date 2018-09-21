import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BoardComponent } from './modules/board/board.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
{ path: '/board', component: BoardComponent }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}