import { ConnectionOptions } from 'typeorm';

export const connection = (entities): ConnectionOptions => {
  return {
    type: 'postgres',
    entities,
    host: process.env.POSTGRES_HOST || 'localhost',
    port: parseInt(process.env.POSTGRES_PORT, 10) || 5432,
    username: process.env.POSTGRES_USER || 'postgres',
    password: process.env.POSTGRES_PASSWORD || 'postgres',
    database: process.env.POSTGRES_DATABASE || 'postgres',
    synchronize: true,
    dropSchema: !!process.env.DROP_DB,
  };
};
