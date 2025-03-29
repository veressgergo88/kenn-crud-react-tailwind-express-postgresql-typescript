import { Request, Response } from "express"
import * as clientService from "../services/clientServices"

export const getClients = async (req: Request, res: Response) => {
    try {
        const clients = await clientService.getClients()
        res.status(200).json(clients)
    } catch (err) {
        console.error("Error fetching clients:", err)
        res.status(500).json({message: 'Internal Server'})
    }
}