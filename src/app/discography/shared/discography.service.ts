import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { handleError } from '../../shared/utilities';

import { Discography } from './discography.model';

@Injectable()
export class DiscographyService {
    private discographyUrl: string = 'api/discography';

    constructor(private http: Http) { }

    getDiscography(): Observable<Discography[]> {
        return this.http.get(this.discographyUrl)
            .map(response => response.json() as Discography[])
            .catch(handleError);
    }
}
