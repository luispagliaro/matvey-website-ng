import { Component, Input, ViewEncapsulation, ViewChild } from '@angular/core';

import { CarouselConfig, CarouselComponent as NgXBCarouselComponent } from 'ngx-bootstrap/carousel';

import { Photos } from '../../photos/shared/photos.model';

@Component({
    selector: 'app-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.less'],
    providers: [{ provide: CarouselConfig, useValue: { interval: 0, noPause: true } }],
    encapsulation: ViewEncapsulation.None
})
export class CarouselComponent {
    @Input() album: Photos;

    @ViewChild('carousel') public carousel: NgXBCarouselComponent;

    constructor() { }

    resetCarousel() {
        this.carousel.selectSlide(0);
    }
}
