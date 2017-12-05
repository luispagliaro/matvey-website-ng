import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';

import { handleError } from '../../shared/utilities';

import { Discography } from './discography.model';

@Injectable()
export class DiscographyService {
    private discographyUrl: string = 'api/discography';

    constructor(private http: HttpClient) { }

    getDiscography(): Observable<Discography[]> {
        return this.http.get<Discography[]>(this.discographyUrl)
            .pipe(
                catchError(handleError('getDiscography', []))
            );
    }
}
