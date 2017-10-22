import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { handleError } from '../../shared/utilities';

import { News } from './news.model';

@Injectable()
export class NewsService {
    private newsUrl: string = 'api/news';

    constructor(private http: Http) { }

    getNews(): Observable<News[]> {
        return this.http.get(this.newsUrl)
            .map(response => response.json() as News[])
            .catch(handleError);
    }
}
