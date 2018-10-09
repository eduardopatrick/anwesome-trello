
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';


import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


import { IBoardService } from './iboard.service';
import { Board } from '../../models/board';
import { BOARDS} from './board-mock';


@Injectable()
export class BoardService implements IBoardService {
  getBoard(): any {
    throw new Error('Method not implemented.');
  }

    // tslint:disable-next-line:member-ordering
    private url  = 'http://localhost:3000/boards';

    constructor(private http: Http) { }

    public create(board: Board): Observable<Board> {
        const data = JSON.stringify(board);
        return this.http.post(this.url, data, this.getHeaderOption()).pipe(map(response => response.json()));
    //    return BOARDS;
    }

    public getAll(): Observable<Board[]> {
        return this.http.get(this.url).pipe(map(response => response.json()));
        // return BOARDS;
    }

    public get(id: number): Observable<Board> {
        return this.http.get(this.url + '/' + id).pipe(map(response => response.json()));
        // return BOARDS;
    }


    public update(board: Board): Observable<Board> {
        const data = JSON.stringify(board);
        return this.http.post(this.url + '/' + board.id, data, this.getHeaderOption()).pipe(map(response => response.json()));
        // return BOARDS;
    }

    public delete(id: number): Observable<Board> {
        return this.http.post(this.url + '/delete/' + id, this.getHeaderOption()).pipe(map(response => response.json()));
        // return BOARDS;
    }

    private getHeaderOption(): RequestOptions {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        return new RequestOptions({ headers: headers });
    }
}
