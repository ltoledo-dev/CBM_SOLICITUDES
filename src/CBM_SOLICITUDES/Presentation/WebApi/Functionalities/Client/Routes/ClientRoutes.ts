import express from 'express';
import * as ClientController from '../Controllers/ClientController';
import { authenticateJWT } from '../../../Middleware/AuthenticationMiddleware';

const router = express.Router();

router.use(authenticateJWT);
router.get('/clientes', ClientController.getAllClient);
router.post('/clientes', ClientController.createClient);

export default router;