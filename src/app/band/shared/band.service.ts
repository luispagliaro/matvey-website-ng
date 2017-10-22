import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { handleError } from '../../shared/utilities';

import { Band } from './band.model';

@Injectable()
export class BandService {
    private bandUrl: string = 'api/band';

    constructor(private http: Http) { }

    getBand(): Observable<Band> {
        return this.http.get(this.bandUrl)
            .map(response => response.json() as Band[])
            .catch(handleError);
    }
}
