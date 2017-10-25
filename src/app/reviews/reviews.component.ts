import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { Reviews } from './shared/reviews.model';

import { ReviewsService } from './shared/reviews.service';

@Component({
    selector: 'app-reviews',
    templateUrl: './reviews.component.html',
    styleUrls: ['./reviews.component.less']
})
export class ReviewsComponent implements OnInit {
    pageTitle: string = 'Matvey - Reseñas';
    reviews: Reviews[];
    selectedReview: Reviews;
    errorMessage: string;

    constructor(
        private reviewsService: ReviewsService,
        private titleService: Title
    ) { }

    ngOnInit() {
        this.titleService.setTitle(this.pageTitle);
        this.getReviews();
    }

    getReviews(): void {
        this.reviewsService.getReviews()
            .subscribe(
            reviews => {
                this.reviews = reviews;
                this.selectedReview = this.reviews[0];
            },
            error => this.errorMessage = <any>error
            );
    }

    showReview(reviewID: string): void {
        this.selectedReview = this.reviews.find(r => r.id === reviewID);
    }
}
