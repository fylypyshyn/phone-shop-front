import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PhonesComponent} from 'app/pages/phones/phones.component';
import {PhoneResolver} from 'app/core/resolvers/phone-resolver.service';
import {PaymentCardComponent} from 'app/pages/payment-card/payment-card.component';

const routes: Routes = [
    {
        path: '',
        component: PhonesComponent
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
export class PhoneDetailsRoutingModule {
}
