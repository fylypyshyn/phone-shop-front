import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCardModule, MatIconModule, MatToolbarModule } from '@angular/material';
import { RouterModule } from '@angular/router';

import { PhoneDetailsComponent } from 'app/pages/phone-details/phone-details.component';

@NgModule({
    declarations: [
        PhoneDetailsComponent
    ],
    imports: [
        CommonModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatCardModule,
        RouterModule
    ]
})
export class PhoneDetailsModule {
}
