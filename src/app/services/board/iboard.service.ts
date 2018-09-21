import { Board } from '../../models/board';
import { Observable } from 'rxjs'

export interface IBoardService {
    create(board: Board) : Observable<Board>;
    getAll() : Observable<Board[]>;
    get(id: number) : Observable< Board>;
    update(board: Board) : Observable< Board>;
    delete(id: number) : Observable<Board>;
}