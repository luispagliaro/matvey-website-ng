import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';

import { handleError } from '../../shared/utilities';

import { Shows } from './shows.model';

@Injectable()
export class ShowsService {
    private showsUrl: string = 'api/shows';

    constructor(private http: HttpClient) { }

    getShows(): Observable<Shows[]> {
        return this.http.get<Shows[]>(this.showsUrl)
            .pipe(
                catchError(handleError('getShows', []))
            );
    }
}
