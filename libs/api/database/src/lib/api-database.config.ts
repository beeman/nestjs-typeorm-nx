import { connections } from './configs';
import { join } from 'path';

const entities = [
  `${join(process.cwd(), 'apps', 'api')}/**/*.entity{.ts,.js}`,
  `${join(process.cwd(), 'libs', 'api')}/**/*.entity{.ts,.js}`

];
const type = process.env.DB_TYPE || 'sqlite';

export const connection = connections[type](entities);
