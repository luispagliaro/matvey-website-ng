import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BandComponent } from './band.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: BandComponent }
    ])],
    exports: [RouterModule]
})
export class BandRoutingModule { }
