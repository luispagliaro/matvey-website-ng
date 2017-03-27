import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { Discography } from './discography.model';

import { DiscographyService } from './discography.service';

@Component({
    selector: 'app-discography',
    templateUrl: './discography.component.html',
    styleUrls: ['./discography.component.css']
})
export class DiscographyComponent implements OnInit {
    pageTitle: string = 'Matvey - Discografía';
    discography: Discography[];
    errorMessage: string;

    constructor(
        private discographyService: DiscographyService,
        private titleService: Title
    ) { }

    ngOnInit() {
        this.titleService.setTitle(this.pageTitle);
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
