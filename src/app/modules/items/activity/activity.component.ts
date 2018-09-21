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
    this.newActivity = new Activity();
    this.selectedActivity = new Activity();
    this.activityService.getAll().subscribe( activitys => this.activitys = activitys);
  }
  public setShowCreateForm(value: boolean): void {
    this.showCreateForm = value;
  }

  private createActivity(): void {
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


  private selectdActivity(activity: Activity): void {
    this.selectedActivity = activity;
  }



  private getActivitysByCardId(): void {
    this.activityService.getAllByCardId(this.card.id).subscribe(
      x => this.activitys = x,
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
          // tslint:disable-next-line:no-shadowed-variable
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
      // tslint:disable-next-line:no-shadowed-variable
      x => this.activitys = this.activitys.filter(x => x.id !== activity.id),
      error => error = <any>error
    );
  }


}
