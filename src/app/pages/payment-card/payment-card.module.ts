import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {PaymentCardComponent} from 'app/pages/payment-card/payment-card.component';
import {NgPaymentCardModule} from 'ng-payment-card';
import {MatSnackBarModule} from '@angular/material';
import {PurchaseDetailsComponent} from 'app/pages/purchase-details/purchase-details.component';
import {MatIconModule} from '@angular/material/icon';
import {PurchaseDetailsModule} from 'app/pages/purchase-details/purchase-details.module';

@NgModule({
    declarations: [
        PaymentCardComponent
    ],
    entryComponents: [PurchaseDetailsComponent],
    imports: [
        CommonModule,
        RouterModule,
        NgPaymentCardModule,
        MatSnackBarModule,
        MatIconModule,
        PurchaseDetailsModule
    ]
})
export class PaymentCardModule {
}
