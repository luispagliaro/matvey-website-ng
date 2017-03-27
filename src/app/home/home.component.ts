import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { News } from './news.model';
import { Shows } from './shows.model';
import { Reviews } from '../reviews/reviews.model';

import { NewsService } from './news.service';
import { ShowsService } from './shows.service';
import { ReviewsService } from '../reviews/reviews.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    pageTitle: string = 'Matvey - Sitio Oficial';
    news: News[];
    shows: Shows[];
    reviews: Reviews[];
    errorMessage: string;
    private showShows: boolean;
    private previewIndex: number;
    private activePreview: number;

    constructor(
        private newsService: NewsService,
        private showsService: ShowsService,
        private reviewsService: ReviewsService,
        private titleService: Title
    ) { }

    ngOnInit(): void {
        this.titleService.setTitle(this.pageTitle);
        this.activePreview = 0;

        this.getNews();
        this.getShows();
        this.getReviewsPreviews();
    }

    getNews(): void {
        this.newsService.getNews()
            .subscribe(
            news => this.news = news,
            error => this.errorMessage = <any>error
            );
    }

    getShows(): void {
        this.showsService.getShows()
            .subscribe(
            shows => {
                this.shows = shows;
                this.showShows = this.shows.length !== 0 ? true : false;
            },
            error => this.errorMessage = <any>error
            );
    }

    getReviewsPreviews(): void {
        this.reviewsService.getReviewsPreviews()
            .subscribe(
            reviews => {
                this.reviews = reviews;
                this.initCarousel();
            },
            error => this.errorMessage = <any>error
            );
    }

    initCarousel(): void {
        setInterval(() => {
            this.activePreview = this.activePreview + 1;

            if (this.activePreview === this.reviews.length) {
                this.activePreview = 0;
            }
        }, 6000);
    }
}
