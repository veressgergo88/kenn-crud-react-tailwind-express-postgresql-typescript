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
        console.error("Error adding client:", err)
        res.status(500).json({message: 'Internal Server'})
    }
}

export const updateClient = async (req: Request, res: Response) => {
    try {
        const clientId = parseInt(req.params.id)
        const clientData = req.body;
        const updatedClient = await clientService.updateClient(clientData, clientId);

        if (!updatedClient) {
            res.status(404).json({ message: 'Client not found' });
        }
        res.status(200).json(updatedClient);
        
    } catch (err) {
        console.error("Error updating client:", err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const deleteClient = async (req: Request, res: Response) => {
    try {
        const clientId = parseInt(req.params.id)
        const clientData = req.body;
        const deletedClient = await clientService.deleteClient(clientId);

        if (!deletedClient) {
            res.status(404).json({ message: 'Client not found' });
        }
        res.status(200).json(deletedClient);
        
    } catch (err) {
        console.error("Error deleting client:", err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const searchClients = async (req: Request, res: Response) => {
    try {
        const searchTermRaw = req.query.q as string | undefined
        const isActiveRaw = req.query.isActive as string | undefined

        const searchTerm: string | number = searchTermRaw ? searchTermRaw : ""
        const isActive: boolean = isActiveRaw === "false" ? false : true

        const clients = await clientService.searchClients(searchTerm, isActive);
        res.status(200).json(clients)
    } catch (err) {
        console.error("Error searching client:", err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};