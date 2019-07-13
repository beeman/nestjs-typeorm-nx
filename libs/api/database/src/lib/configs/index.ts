import { ConnectionOptions } from 'typeorm';

import { connection as sqlite } from './sqlite.config';
import { connection as postgres } from './postgres.config';

export const connections: { [key: string]: (entities) => ConnectionOptions } = {
  sqlite,
  postgres,
};
