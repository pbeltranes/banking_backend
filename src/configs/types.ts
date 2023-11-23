export interface IConfigModel {
  readonly DB_HOST: string;
  readonly DB_USER?: string;
  readonly DB_PASS?: string;
  readonly DB_PORT?: number;
  readonly DB_NAME?: string;
  readonly DB_TYPE?: string;
  readonly DB_CONNECTION?: string;
  readonly SERVER_PROTOCOL?: string;
  readonly JWT_SECRET?: string;
  readonly NODE_ENV: string;
  readonly APP_ENV: string;
}

//   export interface IEnvironmentModel {
//     readonly TOPIC_ARN: string;
//     readonly ROLE_ARN: string;
//     readonly NODE_ENV: string;
//     readonly APP_ENV: string;
//     // DB
//     readonly DB_HOST: string;
//     readonly DB_USER?: string;
//     readonly DB_PASS?: string;
//     readonly DB_PORT?: number;
//     readonly DB_NAME?: string;
//     readonly DB_TYPE?: string;
//     readonly DB_CONNECTION?: string;
//     readonly SERVER_PROTOCOL?: string;
//     readonly JWT_SECRET?: string;

//   }
