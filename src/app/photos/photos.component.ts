import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { Photos } from './shared/photos.model';

import { PhotosService } from './shared/photos.service';

import { ModalComponent } from '../shared/modal/modal.component';

@Component({
    selector: 'app-photos',
    templateUrl: './photos.component.html',
    styleUrls: [
        './photos.component.less'
    ]
})
export class PhotosComponent implements OnInit {
    pageTitle: string = 'Matvey - Fotos';
    photos: Photos[];
    errorMessage: string;

    @ViewChild(ModalComponent)
    private modalComponent: ModalComponent;

    constructor(
        private photosService: PhotosService,
        private titleService: Title
    ) { }

    ngOnInit() {
        this.titleService.setTitle(this.pageTitle);
        this.getPhotos();
    }

    getPhotos(): void {
        this.photosService.getPhotos()
            .subscribe(
            photos => {
                this.photos = photos;
            },
            error => this.errorMessage = <any>error
            );
    }

    openGallery(album: Photos): void {
        this.modalComponent.loadAlbum(album);
    }
}
