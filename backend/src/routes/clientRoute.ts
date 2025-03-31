import express from "express";
import { getClients, createClient, updateClient, deleteClient, searchClients } from "../controllers/clientController";

const router = express.Router();

router.get('/clients', getClients);
router.post('/clients', createClient);
router.put('/clients/:id', updateClient);
router.delete('/clients/:id', deleteClient);
router.get('/clients/search', searchClients)

export default router;
