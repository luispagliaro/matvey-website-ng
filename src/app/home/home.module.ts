import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';

import { NewsService } from './shared/news.service';
import { ShowsService } from './shared/shows.service';
import { ReviewsService } from '../reviews/shared/reviews.service';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module'
import { AgmCoreModule } from '@agm/core';

@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule,
        AgmCoreModule,
        SharedModule
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
