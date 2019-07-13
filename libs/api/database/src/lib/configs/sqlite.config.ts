import { ConnectionOptions } from 'typeorm';

export const connection = (entities): ConnectionOptions => {
  return {
    type: 'sqlite',
    entities,
    database: `tmp/development.sqlite`,
    synchronize: true,
    logging: true,
  };
};
