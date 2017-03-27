import { Component, OnInit } from '@angular/core';

import { Band } from './band.model';

import { BandService } from './band.service';

@Component({
    selector: 'app-band',
    templateUrl: './band.component.html',
    styleUrls: ['./band.component.css']
})
export class BandComponent implements OnInit {
    band: Band;
    errorMessage: string;

    constructor(private bandService: BandService) {
        this.band = new Band();
    }

    ngOnInit() {
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
