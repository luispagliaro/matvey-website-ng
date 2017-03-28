import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { Videos } from './shared/videos.model';

import { VideosService } from './shared/videos.service';

@Component({
    selector: 'app-videos',
    templateUrl: './videos.component.html',
    styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
    pageTitle: string = 'Matvey - Videos';
    videos: Videos[];
    errorMessage: string;

    constructor(
        private videosService: VideosService,
        private titleService: Title
    ) { }

    ngOnInit() {
        this.titleService.setTitle(this.pageTitle);
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
