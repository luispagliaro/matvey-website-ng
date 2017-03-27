import { NgModule, Optional, SkipSelf } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { throwIfAlreadyLoaded } from './module-import-guard';

import { NavComponent } from './nav/nav.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [NavComponent],
    declarations: [NavComponent]
})
export class CoreModule {
    constructor(
        @Optional() @SkipSelf() parentModule: CoreModule
    ) {
        throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }
}
