import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

import {IPhone} from 'app/core/domain/IPhone';
import {ActivatedRoute} from '@angular/router';
import {ROUTES_SLASHED} from 'app/routes.constants';

@Component({
    selector: 'app-phone-details',
    templateUrl: './phone-details.component.html',
    styleUrls: ['./phone-details.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhoneDetailsComponent implements OnInit {
    public readonly ROUTES_SLASHED = ROUTES_SLASHED;
    public currentPhone: IPhone;
    private phones: IPhone[] = this.route.snapshot.data['phones'];
    private pageId = this.route.snapshot.params['id'];

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.setCurrentPhone();
    }

    private setCurrentPhone() {
        this.currentPhone = this.phones.find((phone: IPhone) => phone.id === this.pageId);
    }
}
