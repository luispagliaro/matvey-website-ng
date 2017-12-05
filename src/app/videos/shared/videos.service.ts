import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';

import { handleError } from '../../shared/utilities';

import { Videos } from './videos.model';

@Injectable()
export class VideosService {
    private videosUrl: string = 'api/videos';

    constructor(private http: HttpClient) { }

    getVideos(): Observable<Videos[]> {
        return this.http.get<Videos[]>(this.videosUrl)
            .pipe(
                catchError(handleError('getVideos', []))
            );
    }
}
