import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideosComponent } from './videos.component';

import { VideosService } from './shared/videos.service';

import { VideosRoutingModule } from './videos-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        VideosRoutingModule,
        SharedModule
    ],
    declarations: [
        VideosComponent
    ],
    providers: [
        VideosService
    ]
})
export class VideosModule { }
