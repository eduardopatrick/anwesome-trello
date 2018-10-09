import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IActivityService } from './iactivity.service';
import { Activity } from '../../models/activity';
import { ACTIVITYS} from './activity-mock';



@Injectable()
export class ActivityService implements IActivityService {


    private url = 'http://localhost:3000/activitys';

    constructor(private http: Http) { }

    create(activity: Activity): Observable<Activity> {
        const data = JSON.stringify(activity);
        return this.http.post(this.url, data, this.getHeaderOption()).pipe(map(response => response.json()));
    }

    getAllByCardId(cardId: number): Observable<Activity[]> {
        return this.http.get(this.url + '/cards/' + cardId).pipe(map(response => response.json()));
    }

    getAll(): Observable<Activity[]> {
        return this.http.get(this.url).pipe(map(response => response.json()));
        // return ACTIVITYS;
    }

    get(id: number): Observable<Activity> {
        return this.http.get(this.url + '/' + id).pipe(map(response => response.json()));
    }

    update(activity: Activity): Observable<Activity> {
      const data = JSON.stringify(activity);
        return this.http.post(this.url + '/' + activity.id, data, this.getHeaderOption()).pipe(map(response => response.json()));
    }

    delete(id: number): Observable<Activity> {
         return this.http.post(this.url + '/delete/' + id, this.getHeaderOption()).pipe(map(response => response.json()));
    }

    private getHeaderOption(): RequestOptions {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        return new RequestOptions({ headers: headers });
    }
}
