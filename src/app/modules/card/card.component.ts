import { Component, OnInit, NgModule } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { switchMap } from 'rxjs/operators';
import { DragulaModule } from 'ng2-dragula';

import { CardService } from '../../services/card/card.service';
import { Card } from '../../models/card';
import { Board } from '../../models/board';
import { BoardService } from '../../services/board/board.service';
import { ActivityService } from '../../services/activity/activity.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'at-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  providers: [CardService, BoardService, ActivityService]

})

@NgModule({
  imports: [
    DragulaModule,
  ]
})
export class CardComponent implements OnInit {

  // Propriedades
  private id: number;
  private name: string;
  private boardId: number;
  private cards: Card[];
  private newCard: Card;
  private selectedCard: Card;
  private board: Board;
  private order: number;




  constructor(
    private route: ActivatedRoute,
    private cardService: CardService,
    private boardService: BoardService,
    private activityService: ActivityService,
    private location: Location
  ) { }


  ngOnInit(): void {
    this.getBoard();
    this.newCard = new Card();
    this.cards = [];
    // this.cards = this.cardService.getAll();
    this.cardService.getAll().subscribe(cards => this.cards = cards);

  }


  private sortCardsByOrder(cards: Card[]): Card[] {
    cards.sort((a, b) => {      // organizando os cards por ordem de criação.
      return a.order - b.order;
    });
    return cards;
  }

  private createCard(): void {
    this.cardService.create(this.newCard).subscribe(
      x => {
        this.cards.push(x);
        this.newCard = new Card();
      },
      error => error = <any>error
    );
  }

  private selectCard(card: Card): void {
    this.selectedCard = card;
  }

  private getBoardIdFromRoute(): void {
    this.route.params.pipe(switchMap((params: Params) => this.boardId = params['id'])).subscribe();
  }
// swithMap permite diferente de outros operadores o efeito de cancelamento //continuar


  private getBoard(): void {
    this.boardService.get(this.boardId).subscribe(
      x => this.board = x,
      error => error = <any>error
    );
  }

  private getCardsByBoardId(): void {
    this.cardService.getAllByBoardId(this.boardId).subscribe(
      x => this.cards = x,
      error => error = <any>error
    );
  }

  private updateCard(): void {
    this.cardService.update(this.selectedCard).subscribe(
      x => {
        Object.assign(
          this.cards.find(x => x.id === this.selectedCard.id), // seleciona o card pelo id
          this.selectedCard // E o atualiza
        );
        this.selectedCard = undefined;
      },
      error => error = <any>error
    );
  }

  private deleteCard(card: Card): void {

    this.cardService.delete(card.id).subscribe(
      x => this.cards = this.cards.filter(x => x.id !== card.id),
      error => error = <any>error
    );
  }







}
