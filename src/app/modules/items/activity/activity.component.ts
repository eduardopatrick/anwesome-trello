import { Component, OnInit, NgModule, Input } from '@angular/core';

import { DragulaModule } from 'ng2-dragula';
import { ActivityService } from '../../../services/activity/activity.service';
import { CardService } from '../../../services/card/card.service';
import { Card } from '../../../models/card';
import { Activity } from '../../../models/activity';



@Component({
  // tslint:disable-next-line:component-selector
  selector: 'at-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss'],
  providers: [ActivityService, CardService]
})


@NgModule({
  imports: [
    DragulaModule
  ]
})

export class ActivityComponent implements OnInit {

  @Input() public card: Card;
  private activitys: Activity[];
  private newActivity: Activity;
  private selectedActivity: Activity;
  private showCreateForm: boolean;

constructor(
  private activityService: ActivityService,
  private cardService: CardService
) { }


  ngOnInit() {
    this.getActivitysByCardId();
    this.newActivity = new Activity({
      order: 0,
      cardId: this.card.id
    });
    // this.activitys = this.activityService.getAll();
  }
  public setShowCreateForm(value: boolean): void {
    this.showCreateForm = value;
  }

  private createActivity(): void {
    if (this.activitys.length !== 0) {
      this.newActivity.order = this.activitys[this.activitys.length - 1].order + 1;
    }
    this.activityService.create(this.newActivity).subscribe(
      x => {
        this.activitys.push(x);
        this.newActivity = new Activity({
          cardId: this.card.id
        });
      },
      error => error = <any>error
    );

    this.setShowCreateForm(false);
  }


  private selectActivity(activity: Activity): void {
    this.selectedActivity = activity;
  }


  private sortActivitysByOrder(activitys: Activity[]): Activity[] {
    activitys.sort((a, b) => {  // para organizar as atividades por ordem de criação logo,
      return a.order - b.order; // a que tiver o menor valor de ordem ficará mais acima.
    });
    return activitys;
  }

  private getActivitysByCardId(): void {
    this.activityService.getAllByCardId(this.card.id).subscribe(
      x => this.activitys = this.sortActivitysByOrder(x),
      error => error = <any>error
    );
  }

  private getCard(): void {
    this.cardService.get(this.card.id).subscribe(
      x => this.card = x,
      error => error = <any>error
    );
  }

  private updateActivity(): void {
    this.activityService.update(this.selectedActivity).subscribe(
      x => {
        Object.assign(
          this.activitys.find(x => x.id === this.selectedActivity.id), // atualizando a atividade
          this.selectedActivity // retornando os valores atualizados para serem vistos pelo observador
        );
        this.selectedActivity = undefined;
      },
      error => error = <any>error
    );
  }

  private deleteActivity(activity: Activity): void {
    this.activityService.delete(activity.id).subscribe(
      x => this.activitys = this.activitys.filter(x => x.id !== activity.id),
      error => error = <any>error
    );
  }


}
