import * as dotenv from 'dotenv';
dotenv.config();

export const SESSION_SECRECT = process.env.SESSION_SECRECT;
export const FACEBOOK_APP_ID = process.env.FACEBOOK_APP_ID;
export const FACEBOOK_APP_SECRECT = process.env.FACEBOOK_APP_SECRECT;
export const isDev = process.env.NODE_ENV === 'production' ? true : false;
export const FRONT_END_URL = process.env.FRONT_END_URL;
