import {ITransaction} from 'app/core/domain/ITransaction';

export interface IPhone {
    id: number;
    name: string;
    imagePath: string;
    description: string;
    price: number;
    transactions: Array<ITransaction>;
}
