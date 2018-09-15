import { Component, OnInit, NgModule, ViewChild } from '@angular/core';

import { DragulaModule} from 'ng2-dragula';
import { ToolbarComponent } from '../../shared/toolbar/toolbar.component';




@Component({
  selector: 'at-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})

@NgModule({
  imports:[
    DragulaModule.forRoot(),
    ToolbarComponent
  ]
})
export class BoardComponent implements OnInit {

  title = 'Anwesome Trello'
  constructor() { }

  ngOnInit() {
  }

}
