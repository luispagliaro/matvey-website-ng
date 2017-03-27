import { NgModule } from '@angular/core';

import { ContactComponent } from './contact.component';

import { ContactRoutingModule } from './contact-routing.module';

@NgModule({
    imports: [
        ContactRoutingModule
    ],
    declarations: [
        ContactComponent
    ]
})
export class ContactModule { }
