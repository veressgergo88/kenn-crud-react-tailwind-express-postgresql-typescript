import pg from 'pg'
import env from 'dotenv'

env.config()

const db = new pg.Client({
    user: process.env.PG_USER || 'postgres',
    host: process.env.PG_HOST || 'localhost',
    database: process.env.PG_DATABASE || 'clients_db',
    password: process.env.PG_PASSWORD || 'loller1988',
    port: Number (process.env.PG_PORT) || 5000
})

db.connect()

db.on('error', (err: Error) => {
    console.error('Unexpected error on idle client', err)
    process.exit(-1)
})

export const query = (text: string, params?: (string | number | boolean | null)[]) => db.query(text, params)