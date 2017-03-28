import { Component, Input, ViewEncapsulation, ViewChild } from '@angular/core';

import { CarouselConfig, CarouselComponent as Ng2BCarouselComponent } from 'ng2-bootstrap/carousel';

import { Photos } from '../../photos/shared/photos.model';

@Component({
    selector: 'app-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.css'],
    providers: [{ provide: CarouselConfig, useValue: { interval: 0, noPause: true } }],
    encapsulation: ViewEncapsulation.None
})
export class CarouselComponent {
    @Input() album: Photos;

    @ViewChild('carousel') public carousel: Ng2BCarouselComponent;

    constructor() { }

    resetCarousel() {
        this.carousel.selectSlide(0);
    }
}
