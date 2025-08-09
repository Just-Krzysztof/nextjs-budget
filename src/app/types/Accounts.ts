export interface IAccounts {
  id: string;
  name: string;
  balance: number;
  currency: string;
  currencyLong: string;
  lastUsed: string;
  isDefault: boolean;
  lastTransaction: {
    price: number;
    currency: string;
    title: string;
    payee: string;
  };
  incomeInAccount: number;
  creationDate: string;
}
