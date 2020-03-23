import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PhoneDetailsComponent } from 'app/pages/phone-details/phone-details.component';
import { PhonesComponent } from 'app/pages/phones/phones.component';
import { PhoneResolver } from 'app/core/resolvers/phone-resolver.service';
import {PaymentCardComponent} from 'app/pages/payment-card/payment-card.component';

const routes: Routes = [
    {
        path: '',
        component: PhonesComponent
    },
    {
        path: ':id',
        component: PhoneDetailsComponent,
        resolve: {phones: PhoneResolver}
    },
    {
        path: 'payment/:id',
        component: PaymentCardComponent,
        resolve: {phones: PhoneResolver}
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PhonesRoutingModule {}
