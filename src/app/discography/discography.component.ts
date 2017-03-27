import { Component, OnInit } from '@angular/core';

import { Discography } from './discography.model';

import { DiscographyService } from './discography.service';

@Component({
    selector: 'app-discography',
    templateUrl: './discography.component.html',
    styleUrls: ['./discography.component.css']
})
export class DiscographyComponent implements OnInit {
    discography: Discography[];
    errorMessage: string;

    constructor(private discographyService: DiscographyService) { }

    ngOnInit() {
        this.getDiscography();
    }

    getDiscography(): void {
        this.discographyService.getDiscography()
            .subscribe(
            news => this.discography = news,
            error => this.errorMessage = <any>error
            );
    }
}
