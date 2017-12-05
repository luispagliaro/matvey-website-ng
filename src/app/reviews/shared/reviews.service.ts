import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { catchError, map } from 'rxjs/operators';

import { handleError } from '../../shared/utilities';

import { Reviews } from './reviews.model';

@Injectable()
export class ReviewsService {
    private reviewsUrl: string = 'api/reviews';

    constructor(private http: HttpClient) { }

    getReviews(): Observable<Reviews[]> {
        return this.http.get<Reviews[]>(this.reviewsUrl)
            .pipe(
                catchError(handleError('getReviews', []))
            );
    }

    getReviewsPreviews(): Observable<Reviews[]> {
        return this.getReviews()
            .map((reviews: Reviews[]) => reviews.filter(r => r.preview !== ''));
    }
}
