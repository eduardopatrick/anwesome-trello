// Angular imports
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

// Rxjs imports
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// Custom import types
import { Card } from '../../models/card';
import { ICardService } from './icard.service';
import { CARDS } from './card-mock';

// Service
@Injectable()
export class CardService implements ICardService {


    private url = 'http://localhost:3000/cards';


    constructor(private http: Http) { }


    create(card: Card): Observable<Card> {
        const data = JSON.stringify(card);
        return this.http.post(
            this.url, data,
            this.getHeaderOption())
            .pipe(map(response => response.json()));
    }

    getAllByBoardId(boardId: number): Observable<Card[]> {
        return this.http.get(this.url + '/card/' + boardId).pipe(map(response => response.json()));
    }

    getAll(): Observable<Card[]> {
        return this.http.get(this.url).pipe(map(response => response.json()));
        // return CARDS;
    }

    get(id: number): Observable<Card> {
        return this.http.get(this.url + '/' + id).pipe(map(response => response.json()));
    }

    update(card: Card): Observable<Card> {
      const data = JSON.stringify(card);
        return this.http.post(this.url + '/' + card.id, data, this.getHeaderOption()).pipe(map(response => response.json()));
    }

    delete(id: number): Observable<Card> {
         return this.http.post(this.url + '/delete/' + id, this.getHeaderOption()).pipe(map(response => response.json()));
    }

    private getHeaderOption(): RequestOptions {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        return new RequestOptions({ headers: headers });
    }
}
