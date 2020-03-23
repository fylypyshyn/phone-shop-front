import {Component, Inject, OnInit} from '@angular/core';
import {MAT_SNACK_BAR_DATA} from '@angular/material';

@Component({
    selector: 'app-purchase-details',
    templateUrl: './purchase-details.component.html',
    styleUrls: ['./purchase-details.component.scss']
})
export class PurchaseDetailsComponent implements OnInit {

    constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) {
    }

    ngOnInit() {
    }

}
