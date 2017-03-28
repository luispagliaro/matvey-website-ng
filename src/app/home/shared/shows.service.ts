import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { extractData, handleError } from '../../shared/utilities';

import { Shows } from './shows.model';

@Injectable()
export class ShowsService {
    private showsUrl: string = 'api/shows';

    constructor(private http: Http) { }

    getShows(): Observable<Shows[]> {
        return this.http.get(this.showsUrl)
            .map(extractData)
            .catch(handleError);
    }
}
