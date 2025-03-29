import { query } from "../db"

type Client = {
    name: string,
    email: string,
    job: string,
    rate: number,
    isactive: boolean
}

export const getClients = async() => {
    const {rows} = await query('SELECT * FROM clients_tb')
    return rows
}

export const createClient = async(clientData:Client) => {
    const { name, email, job, rate, isactive } = clientData
    const { rows } = await query(
        `INSERT INTO clients_tb (name, email, job, rate, isactive)
        VALUES ($1, $2, $3, $4, $5) RETURNING *`,
        [name, email, job, rate, isactive]
    )
    
    return rows[0]
}

export const updateClient = async(clientData:Client, clientId:number) => {
    const { name, email, job, rate, isactive } = clientData
    const { rows } = await query(
        `UPDATE clients_tb SET name = $1, email = $2, job = $3, rate = $4, isactive = $5)
        WHERE id = $6 RETURNING *`,
        [name, email, job, rate, isactive, clientId ]
    )
    
    return rows[0]
}

