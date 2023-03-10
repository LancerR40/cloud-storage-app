import dotenv from 'dotenv'
dotenv.config()

export default {
  /* Server */
  PORT: process.env.PORT,

  /* Database */
  DB_HOST: '127.0.0.1',
  DB_USER: 'root',
  DB_PASSWORD: '01071998',
  DB_NAME: 'cloud-storage-app-db',
}