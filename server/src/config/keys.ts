import { config as prod } from './prod';
import { config as dev } from './dev';
import { ProcessEnv } from './types';

let config: ProcessEnv;

if (process.env.NODE_ENV === 'production') {
  config = prod;
} else {
  config = dev;
}
export { config };
