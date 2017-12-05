import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule  } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './core/in-memory-data.service';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module'

import { AppRoutingModule } from './app-routing.module';

import { AgmCoreModule } from '@agm/core';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@NgModule({
    declarations: [
        AppComponent,
        PageNotFoundComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        HttpClientModule,
        HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService),
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyDQ2eJm2vfOiS0c4hAOayp0kH-RlfbvDBE'
        }),
        ModalModule.forRoot(),
        CarouselModule.forRoot(),
        CoreModule,
        AppRoutingModule,
        HomeModule
    ],
    providers: [Title],
    bootstrap: [AppComponent]
})
export class AppModule { }
