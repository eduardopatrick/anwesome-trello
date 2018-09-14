import { Component, OnInit, NgModule } from '@angular/core';

import { DragulaModule } from 'ng2-dragula';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.scss']
})

@NgModule({
  imports:[
    DragulaModule.forRoot()
  ]
})
export class ActivityListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
