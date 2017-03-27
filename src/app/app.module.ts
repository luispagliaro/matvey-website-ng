import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api/in-memory-web-api.module';
import { InMemoryDataService } from './core/in-memory-data.service';
import './shared/rxjs-extensions';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module'

import { AppRoutingModule } from './app-routing.module';

import { AgmCoreModule } from 'angular2-google-maps/core';
import { ModalModule } from 'ng2-bootstrap/modal';
import { CarouselModule } from 'ng2-bootstrap/carousel';

@NgModule({
    declarations: [
        AppComponent,
        PageNotFoundComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyDQ2eJm2vfOiS0c4hAOayp0kH-RlfbvDBE'
        }),
        ModalModule.forRoot(),
        CarouselModule.forRoot(),
        CoreModule,
        AppRoutingModule,
        HomeModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
