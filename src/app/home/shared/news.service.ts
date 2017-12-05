import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';

import { handleError } from '../../shared/utilities';

import { News } from './news.model';

@Injectable()
export class NewsService {
    private newsUrl: string = 'api/news';

    constructor(private http: HttpClient) { }

    getNews(): Observable<News[]> {
        return this.http.get<News[]>(this.newsUrl)
            .pipe(
                catchError(handleError('getNews', []))
            );
    }
}
