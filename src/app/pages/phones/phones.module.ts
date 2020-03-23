import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatCardModule, MatPaginatorModule, MatToolbarModule} from '@angular/material';

import {PhonesComponent} from 'app/pages/phones/phones.component';
import {PhonesRoutingModule} from 'app/pages/phones/phones-routing.module';
import {PhoneDetailsModule} from 'app/pages/phone-details/phone-details.module';
import {ReactiveFormsModule} from '@angular/forms';
import {PaymentCardModule} from 'app/pages/payment-card/payment-card.module';

@NgModule({
    declarations: [
        PhonesComponent
    ],
    imports: [
        CommonModule,
        PhonesRoutingModule,
        PhoneDetailsModule,
        MatPaginatorModule,
        MatCardModule,
        MatToolbarModule,
        MatButtonModule,
        ReactiveFormsModule,
        PaymentCardModule
    ]
})
export class PhonesModule {
}
