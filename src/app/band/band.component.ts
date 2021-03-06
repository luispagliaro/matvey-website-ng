import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { Band } from './shared/band.model';

import { BandService } from './shared/band.service';

@Component({
    selector: 'app-band',
    templateUrl: './band.component.html',
    styleUrls: ['./band.component.less']
})
export class BandComponent implements OnInit {
    pageTitle: string = 'Matvey - Banda';
    band: any;
    errorMessage: string;

    constructor(
        private bandService: BandService,
        private titleService: Title
    ) {
        this.band = new Band();
    }

    ngOnInit() {
        this.titleService.setTitle(this.pageTitle);
        this.getBand();
    }

    getBand(): void {
        this.bandService.getBand()
            .subscribe(
            band => this.band = band,
            error => this.errorMessage = <any>error
            );
    }
}
