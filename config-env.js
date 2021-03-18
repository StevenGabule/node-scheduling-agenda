import dotenv from 'dotenv';
import { logger } from './helpers/logger.js';
logger.info(`${JSON.stringify(dotenv.config())} - env`);
