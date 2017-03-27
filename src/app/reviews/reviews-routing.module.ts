import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ReviewsComponent } from './reviews.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: ReviewsComponent }
    ])],
    exports: [RouterModule]
})
export class ReviewsRoutingModule { }
