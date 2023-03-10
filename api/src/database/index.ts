import mysql from 'mysql2'
import config from '../config'
import { promisify } from 'util'

const connection = mysql.createConnection({
  host: config.DB_HOST,
  user: config.DB_USER,
  password: config.DB_PASSWORD,
  database: config.DB_NAME,
})

connection.connect((error) => {
  if (error) {
    throw error
  }

  console.info('Database is connected')
})

const query = promisify(connection.query).bind(connection)

export default query