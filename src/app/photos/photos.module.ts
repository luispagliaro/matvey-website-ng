import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotosComponent } from './photos.component';

import { PhotosService } from './shared/photos.service';

import { SharedModule } from '../shared/shared.module'
import { PhotosRoutingModule } from './photos-routing.module';

@NgModule({
    imports: [
        CommonModule,
        PhotosRoutingModule,
        SharedModule
    ],
    declarations: [
        PhotosComponent
    ],
    providers: [
        PhotosService
    ]
})
export class PhotosModule { }
