import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiscographyComponent } from './discography.component';

import { DiscographyService } from './shared/discography.service';

import { DiscographyRoutingModule } from './discography-routing.module';

@NgModule({
    imports: [
        CommonModule,
        DiscographyRoutingModule
    ],
    declarations: [
        DiscographyComponent
    ],
    providers: [
        DiscographyService
    ]
})
export class DiscographyModule { }
