import {Component, OnInit} from '@angular/core';
import {CommonDataService} from 'app/core/services/common-data.service';
import {ITransaction} from 'app/core/domain/ITransaction';
import * as uuid from 'uuid';
import {ActivatedRoute, Router} from '@angular/router';
import {IPhoneTransaction} from 'app/core/domain/IPhoneTransaction';
import {MatSnackBar} from '@angular/material';
import {PurchaseDetailsComponent} from 'app/pages/purchase-details/purchase-details.component';

@Component({
    selector: 'app-buy',
    templateUrl: './payment-card.component.html',
    styleUrls: ['./payment-card.component.scss']
})
export class PaymentCardComponent implements OnInit {

    private phoneId = this.route.snapshot.params['id'];

    constructor(private commonDataService: CommonDataService, private route: ActivatedRoute,
                private router: Router, private snackBar: MatSnackBar) {
    }

    ngOnInit() {
    }

    formSaved() {
        const transaction = this.setUpTransaction();
        this.commonDataService.saveTransaction(transaction)
            .subscribe((savedTransaction) => {
                const phoneTransaction = this.setUpPhoneTransaction(savedTransaction);
                this.commonDataService.addTransactionToPhone(phoneTransaction).subscribe(
                    success => {
                        this.showPopUp('SUCCESS');
                        this.redirectToHomePage();
                    },
                    error => {
                        this.showPopUp('ERROR');
                    });
            });
    }

    private setUpTransaction(): ITransaction {
        return {
            transactionNumber: uuid.v4()
        };
    }

    private setUpPhoneTransaction(transaction: ITransaction): IPhoneTransaction {
        return {
            id: this.phoneId,
            transaction
        };
    }

    private showPopUp(message: string) {
        this.snackBar.openFromComponent(PurchaseDetailsComponent, {
            duration: 2000,
            data: {
                message,
            }
        });
    }

    private redirectToHomePage() {
        this.router.navigate(['../']);
    }
}
