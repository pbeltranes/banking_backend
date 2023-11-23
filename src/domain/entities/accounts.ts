// export interface IAccount {
//   name: string;
//   account_number: string;
//   initial_balance: number;
// }

export interface Account {
  name: string;
  account_number: string;
  initial_balance: number;
}

export interface RequestAccounts {
  name: string;
  account_number: string;
  initial_balance: number;
}

export interface ResponseAccounts {
  id: number;
}
