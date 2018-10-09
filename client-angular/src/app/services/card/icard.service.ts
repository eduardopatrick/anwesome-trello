import { Card } from '../../models/card';
import { Observable } from 'rxjs';


export interface ICardService {
    create(card: Card): Observable<Card>;
    getAll(): Observable<Card[]>;
    getAllByBoardId(boardId: number): Observable<Card[]>;
    get(id: number): Observable<Card>;
    update(card: Card): Observable<Card>;
    delete(id: number): Observable<Card>;
}
