import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalComponent } from './modal/modal.component';
import { CarouselComponent } from './carousel/carousel.component';

import { ModalModule } from 'ng2-bootstrap/modal';
import { CarouselModule } from 'ng2-bootstrap/carousel';
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
