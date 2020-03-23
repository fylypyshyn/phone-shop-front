import {ITransaction} from 'app/core/domain/ITransaction';

export interface IPhoneTransaction {
    id: number;
    transaction: ITransaction;
}
