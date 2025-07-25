export interface ITransactions {
    transactions: ITransaction[];
}

export interface ITransaction {
    id: number;
    date: string;
    description: string;
    amount: number;
    type: 'transfer' | 'deposit';
    isSuccessful: boolean;
}