import express from 'express';
import * as ClientController from '../Controllers/ClientController';

const router = express.Router();

router.get('/clientes', ClientController.getAllClient);

export default router;