import express  from "express";
import * as clientController from '../controllers/clientController'

const router = express.Router()

router.get('/clients', clientController.getClients)
router.post('/clients', clientController.createClient)
router.put('/clients/:id', clientController.updateClient)

export default router