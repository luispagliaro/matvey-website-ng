import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { handleError } from '../../shared/utilities';

import { Photos } from './photos.model';

@Injectable()
export class PhotosService {
    private photosUrl: string = 'api/photos';
    private photos: Photos[];

    constructor(private http: Http) { }

    getPhotos(): Observable<Photos[]> {
        return this.http.get(this.photosUrl)
            .map(e => {
                this.photos = e.json().data
                    .map((p: Photos) => {
                        p.photosNumbers = Array.from(
                            new Array(p.amount),
                            (val, index) => index + 1);

                        return p;
                    });

                return this.photos;
            })
            .catch(handleError);
    }
}
