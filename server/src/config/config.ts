import 'dotenv/config'

const _config = {
  PORT: process.env.PORT,
  DB_URI: process.env.DB_URI
}

export const config = Object.freeze(_config)
