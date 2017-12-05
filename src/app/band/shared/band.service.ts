import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';

import { handleError } from '../../shared/utilities';

import { Band } from './band.model';

@Injectable()
export class BandService {
    private bandUrl: string = 'api/band';

    constructor(private http: HttpClient) { }

    getBand(): Observable<any[] | Band> {
        return this.http.get<Band>(this.bandUrl)
        .pipe(
            catchError(handleError('getBand', []))
        );
    }
}
