import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalComponent } from './modal/modal.component';
import { CarouselComponent } from './carousel/carousel.component';

import { ModalModule } from 'ngx-bootstrap/modal';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { SafeUrlPipe } from './safe-url.pipe';

@NgModule({
    imports: [
        CommonModule,
        ModalModule,
        CarouselModule
    ],
    declarations: [
        ModalComponent,
        CarouselComponent,
        SafeUrlPipe
    ],
    exports: [
        ModalComponent,
        CarouselComponent,
        SafeUrlPipe
    ]
})
export class SharedModule { }
