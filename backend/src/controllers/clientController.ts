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

export const createClient = async (req: Request, res: Response) => {
    try {
        const clientData = req.body
        const newClient = await clientService.createClient(clientData)
        res.status(200).json(newClient)
    } catch (err) {
        console.error("Error fetching clients:", err)
        res.status(500).json({message: 'Internal Server'})
    }
}

export const updateClient = async (req: Request, res: Response) => {
    try {
        const clientId = req.params.id
        
    } catch (err) {
        console.error("Error fetching clients:", err)
        res.status(500).json({message: 'Internal Server'})
    }
}