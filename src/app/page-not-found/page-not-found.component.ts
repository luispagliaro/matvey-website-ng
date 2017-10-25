import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-page-not-found',
    templateUrl: './page-not-found.component.html'
})
export class PageNotFoundComponent implements OnInit {
    pageTitle: string = 'Error - Página no encontrada';

    constructor(private titleService: Title) { }

    ngOnInit() {
        this.titleService.setTitle(this.pageTitle);
    }
}
