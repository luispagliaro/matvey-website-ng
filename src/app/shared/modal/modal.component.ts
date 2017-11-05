import { Component, ViewChild } from '@angular/core';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { CarouselComponent } from '../carousel/carousel.component';

import { Photos } from '../../photos/shared/photos.model';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.less']
})
export class ModalComponent {
    modalTitle: string;
    album: Photos;
    image: any;

    @ViewChild('modal') public modal: ModalDirective;
    @ViewChild('carousel') public carousel: CarouselComponent;

    constructor() { }

    public loadImage(name, alt): void {
        this.image = name;
        this.modalTitle = alt;

        this.modal.show();
    }

    public loadAlbum(album: Photos): void {
        this.album = album;
        this.modalTitle = album.title;

        this.modal.show();
    }

    public hideModal(): void {
        this.modal.hide();
        this.carousel && this.carousel.resetCarousel();
    }
}
