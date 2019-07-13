import { createConnection } from 'typeorm';
import { DB_CON_TOKEN } from './api-database.constants';
import { connection } from './api-database.config';

export const databaseProviders = [
  {
    provide: DB_CON_TOKEN,
    useFactory: async () => createConnection(connection),
  },
];
