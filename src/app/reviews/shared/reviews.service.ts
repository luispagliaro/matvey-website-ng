import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { extractData, handleError } from '../../shared/utilities';

import { Reviews } from './reviews.model';

@Injectable()
export class ReviewsService {
    private reviewsUrl: string = 'api/reviews';

    constructor(private http: Http) { }

    getReviews(): Observable<Reviews[]> {
        return this.http.get(this.reviewsUrl)
            .map(extractData)
            .catch(handleError);
    }

    getReviewsPreviews(): Observable<Reviews[]> {
        return this.getReviews()
            .map((reviews: Reviews[]) => reviews.filter(r => r.preview !== ''));
    }
}
