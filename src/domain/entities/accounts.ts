// export interface IAccount {
//   name: string;
//   account_number: string;
//   initial_balance: number;
// }

export interface Account {
  name: string;
  account_number: number;
  initial_balance: number;
  account_id: number;
}

export interface RequestAccounts {
  name: string;
  account_number: number;
  initial_balance: number;
  account_id: number;
}

export interface ResponseAccounts {
  id: number;
}
export interface ResponseAccountsRepository {
  acknowledged: boolean;
  insertedId: number;
}


export interface RequestFindAccount {
  account_number: number;
}

export interface ResponseFindAccount {
  name: string;
  account_number: number;
  initial_balance: number;
  account_id: number;
}