import { Component, OnInit, NgModule } from '@angular/core';

import { DragulaModule } from 'ng2-dragula';
import { Board } from '../../models/board';
import { BoardService } from '../../services/board/board.service';
import { FormsModule } from '@angular/forms';





@Component({
  // tslint:disable-next-line:component-selector
  selector: 'at-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
  providers: [BoardService]
})

@NgModule({
  imports: [
    DragulaModule.forRoot(),
    FormsModule
  ]
})
export class BoardComponent implements OnInit {
  // PROPRIEDADES
  private id: number;
  private title: string;
  public boards: Board[];
  public selectedBoard: Board;
  public newBoard: Board;
  constructor(
     private boardService: BoardService,
    ) { }

    ngOnInit(): void {
      this.newBoard = new Board();
      this.selectedBoard = new Board();
      this.getAllBoards();
      // this.boards = this.boardService.getAll();
       }
  // MÉTODOS
    private createBoard(): void {
    this.boardService.create(this.newBoard).subscribe(
        x => {
            this.boards.push(x);
            this.newBoard = new Board();
        },
        error => error = <any>error
    );
}
  // pegando todas as Boards do array para exibição na view
private getAllBoards(): void {
  this.boardService.getAll().subscribe(
      x => this.boards = x,
      error => error = <any>error
  );
}
  // Apenas uma Board por id
private getBoard(board: Board): void {
  this.boardService.get(board.id).subscribe(
      x => this.selectedBoard = x,
      error => error = <any>error
  );
}

private updateBoard(): void {
  this.boardService.update(this.selectedBoard).subscribe(
      x => {
          Object.assign(
              // tslint:disable-next-line:no-shadowed-variable
              this.boards.find(x => x.id === this.selectedBoard.id),
              this.selectedBoard // atualizando a board
          );
          this.selectedBoard = undefined;
      },
      error => error = <any>error
  );
}

private selectBoard(board: Board): void {
  this.selectedBoard = board;
}

private deleteBoard(board: Board): void {
  this.boardService.delete(board.id).subscribe(
      // tslint:disable-next-line:no-shadowed-variable
      x => this.boards = this.boards.filter(x => x.id !== board.id),
      error => error = <any>error
  );
}

}
