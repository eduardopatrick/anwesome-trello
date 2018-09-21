import { Activity } from '../../models/activity';
import { Observable } from 'rxjs';


export interface IActivityService {
    create(activity: Activity): Observable<Activity>;
    getAll(): Observable<Activity[]>;
    getAllByCardId(cardId: number): Observable<Activity[]>;
    get(id: number): Observable<Activity>;
    update(activity: Activity): Observable<Activity>;
    delete(id: number): Observable<Activity>;
}