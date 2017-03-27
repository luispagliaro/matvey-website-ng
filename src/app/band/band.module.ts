import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BandComponent } from './band.component';

import { BandService } from './band.service';

import { BandRoutingModule } from './band-routing.module';

@NgModule({
    imports: [
        CommonModule,
        BandRoutingModule
    ],
    declarations: [
        BandComponent
    ],
    providers: [
        BandService
    ]
})
export class BandModule { }
