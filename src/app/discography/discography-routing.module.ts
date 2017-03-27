import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DiscographyComponent } from './discography.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: DiscographyComponent }
    ])],
    exports: [RouterModule]
})
export class DiscographyRoutingModule { }