import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ROUTES} from 'app/routes.constants';
import {PhoneResolver} from 'app/core/resolvers/phone-resolver.service';

const routes: Routes = [
    {
        path: '',
        redirectTo: ROUTES.PHONES,
        pathMatch: 'full'
    },
    {
        path: ROUTES.PHONES, loadChildren: () => import('./pages/phones/phones.module').then(m => m.PhonesModule),
        resolve: {phones: PhoneResolver}
    },
    {
        path: ROUTES.PHONES + ROUTES.PAYMENT, loadChildren: () => import('./pages/payment-card/payment-card.module').then(m => m.PaymentCardModule),
        resolve: {phones: PhoneResolver}
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
