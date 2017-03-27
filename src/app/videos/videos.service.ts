import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { extractData, handleError } from '../shared/utilities.service';

import { Videos } from './videos.model';

@Injectable()
export class VideosService {
    private videosUrl: string = 'api/videos';
    private videos: Videos[];

    constructor(private http: Http) { }

    getVideos(): Observable<Videos[]> {
        return this.http.get(this.videosUrl)
            .map(extractData)
            .catch(handleError);
    }
}
