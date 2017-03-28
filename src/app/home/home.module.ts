import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';

import { NewsService } from './shared/news.service';
import { ShowsService } from './shared/shows.service';
import { ReviewsService } from '../reviews/shared/reviews.service';

import { HomeRoutingModule } from './home-routing.module';
import { AgmCoreModule } from 'angular2-google-maps/core';

@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule,
        AgmCoreModule
    ],
    declarations: [
        HomeComponent
    ],
    providers: [
        NewsService,
        ShowsService,
        ReviewsService
    ]
})
export class HomeModule { }
