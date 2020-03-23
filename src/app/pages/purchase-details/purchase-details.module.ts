import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import {RouterModule} from '@angular/router';
import {PurchaseDetailsComponent} from 'app/pages/purchase-details/purchase-details.component';

@NgModule({
    declarations: [
        PurchaseDetailsComponent
    ],
    imports: [
        CommonModule,
        MatIconModule,
        MatButtonModule,
        RouterModule
    ]
})
export class PurchaseDetailsModule {
}
