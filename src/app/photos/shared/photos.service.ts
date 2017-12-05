import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { catchError, map } from 'rxjs/operators';

import { handleError } from '../../shared/utilities';

import { Photos } from './photos.model';

@Injectable()
export class PhotosService {
    private photosUrl: string = 'api/photos';
    private photos: Photos[];

    constructor(private http: HttpClient) { }

    getPhotos(): Observable<Photos[]> {
        return this.http.get<Photos[]>(this.photosUrl)
            .pipe(
                map(e => {
                    this.photos = e
                        .map((p: Photos) => {
                            p.photosNumbers = Array.from(
                                new Array(p.amount),
                                (val, index) => index + 1);

                            return p;
                        });

                    return this.photos;
                }),
                catchError(handleError('getPhotos', []))
            );

    }
}
