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

    @ViewChild('modal') public modal: ModalDirective;
    @ViewChild('carousel') public carousel: CarouselComponent;

    constructor() { }

    public showModal(album: Photos): void {
        this.album = album;
        this.modalTitle = album.title;

        this.modal.show();
    }

    public hideModal(): void {
        this.modal.hide();
        this.carousel.resetCarousel();
    }
}
