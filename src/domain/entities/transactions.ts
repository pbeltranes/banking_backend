// export interface IAccount {
//     type: string;
//     amount: string;
//     account_id: number;
//   }
export interface Transaction {
  type: string;
  amount: number;
  account_id: number;
}

export interface RequestTransaction {
  type: string;
  amount: number;
  account_id: number;
}

export interface ResponseTransaction {
  id: number;
}
