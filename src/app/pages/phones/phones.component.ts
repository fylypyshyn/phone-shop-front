import {ChangeDetectionStrategy, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, PageEvent} from '@angular/material';
import {ActivatedRoute} from '@angular/router';

import {IPhone} from 'app/core/domain/IPhone';
import {ROUTES_SLASHED} from 'app/routes.constants';
import {PaginationService} from 'app/core/services/pagination.service';

@Component({
    selector: 'app-phones',
    templateUrl: './phones.component.html',
    styleUrls: ['./phones.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhonesComponent implements OnInit {
    public readonly ROUTES_SLASHED = ROUTES_SLASHED;

    private phones: IPhone[] = this.route.snapshot.data['phones'];
    public currentPhones: IPhone[];

    @ViewChild(MatPaginator, {static: true})
    paginator: MatPaginator;

    constructor(
        private route: ActivatedRoute,
        public paginationService: PaginationService
    ) {
    }

    ngOnInit() {
        this.updatePaginatorValues();
    }

    public setPhonesAndPaginationValues(event: PageEvent) {
        this.setPaginationValues(event);
        this.setCurrentPhones(event);
    }

    private setPaginationValues(event: PageEvent) {
        this.paginationService.pageSize = event.pageSize;
        this.paginationService.pageIndex = event.pageIndex;
    }

    private setCurrentPhones(event: PageEvent) {
        const endPoint = event.pageSize * (event.pageIndex + 1);
        const startPoint = endPoint - event.pageSize;
        this.currentPhones = this.phones.slice(startPoint, endPoint);
    }

    private updatePaginatorValues() {
        this.paginator.page.emit({
            pageSize: this.paginationService.pageSize,
            pageIndex: this.paginationService.pageIndex,
            length: this.phones.length
        });
    }
}
