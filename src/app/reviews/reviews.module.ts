import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReviewsComponent } from './reviews.component';

import { ReviewsService } from './reviews.service';

import { ReviewsRoutingModule } from './reviews-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        ReviewsRoutingModule,
        SharedModule
    ],
    declarations: [
        ReviewsComponent
    ],
    providers: [
        ReviewsService
    ]
})
export class ReviewsModule { }
