import { query } from "../db"

export const getClients = async() => {
    const data = await query('SELECT * FROM clients_tb')
    return data.rows
}