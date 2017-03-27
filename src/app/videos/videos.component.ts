import { Component, OnInit } from '@angular/core';

import { Videos } from './videos.model';

import { VideosService } from './videos.service';

@Component({
    selector: 'app-videos',
    templateUrl: './videos.component.html',
    styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
    videos: Videos[];
    errorMessage: string;

    constructor(private videosService: VideosService) { }

    ngOnInit() {
        this.getVideos();
    }

    getVideos(): void {
        this.videosService.getVideos()
            .subscribe(
            videos => this.videos = videos,
            error => this.errorMessage = <any>error
            );
    }
}
