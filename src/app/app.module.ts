import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppRoutingModule} from './app-routing.module';
import {MainComponent} from './layouts/main/main.component';
import {HttpClientModule} from '@angular/common/http';
import {PaymentCardModule} from 'app/pages/payment-card/payment-card.module';

@NgModule({
    declarations: [
        MainComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        PaymentCardModule
    ],
    providers: [],
    bootstrap: [MainComponent]
})
export class AppModule {
}
