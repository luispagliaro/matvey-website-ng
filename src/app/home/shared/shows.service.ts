import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { handleError } from '../../shared/utilities';

import { Shows } from './shows.model';

@Injectable()
export class ShowsService {
    private showsUrl: string = 'api/shows';

    constructor(private http: Http) { }

    getShows(): Observable<Shows[]> {
        return this.http.get(this.showsUrl)
            .map(response => response.json() as Shows[])
            .catch(handleError);
    }
}
