import * as dotenv from 'dotenv';
dotenv.config();

export const SESSION_SECRECT = process.env.SESSION_SECRECT;
export const isDev = process.env.NODE_ENV === 'production' ? true : false;
