import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {EMPTY, Observable, of} from 'rxjs';

import {IPhone} from 'app/core/domain/IPhone';
import {CommonDataService} from 'app/core/services/common-data.service';
import {mergeMap} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class PhoneResolver implements Resolve<IPhone[]> {

    constructor(private commonDataService: CommonDataService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IPhone[]> | Promise<IPhone[]> | IPhone[] {
        return this.commonDataService.getPhones()
            .pipe(mergeMap(phones => {
                if (phones) {
                    return of(phones);
                } else {
                    return EMPTY;
                }
            }));
    }

}
