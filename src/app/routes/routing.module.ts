// Angular imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CardComponent } from "./../modules/card/card.component";
import { BoardComponent } from "./../modules/board/board.component";


const routes: Routes = [
  { 
    path: '',  component: BoardComponent
  },
  { 
    path: 'board/:id',  component: CardComponent
  }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})


export class RoutingModule { }
