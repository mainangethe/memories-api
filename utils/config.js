import dotenv from 'dotenv'

if (process.env.NODE_ENV !== 'production') {
  dotenv.config()
}

export const PORT = process.env.PORT;
export const MONGODB_URL = process.env.MONGODB_URL;

