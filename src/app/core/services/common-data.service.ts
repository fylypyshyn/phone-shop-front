import {Injectable} from '@angular/core';
import {IPhone} from 'app/core/domain/IPhone';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ITransaction} from 'app/core/domain/ITransaction';
import {IPhoneTransaction} from 'app/core/domain/IPhoneTransaction';

@Injectable({
    providedIn: 'root'
})
export class CommonDataService {

    apiUrl = 'http://localhost:8080/api/';

    constructor(private http: HttpClient) {
    }

    getPhones(): Observable<IPhone[]> {
        return this.http.get<IPhone[]>(this.apiUrl + 'phones');
    }

    saveTransaction(transaction: ITransaction): Observable<ITransaction> {
        return this.http.post<ITransaction>(this.apiUrl + 'saveTransaction', transaction);
    }

    addTransactionToPhone(phoneTransaction: IPhoneTransaction): Observable<IPhone> {
        return this.http.post<IPhone>(this.apiUrl + 'updatePhone', phoneTransaction);
    }

}
