import express from 'express';
import * as ClientController from '../Controllers/AuthenticationController';
import { authenticateJWT } from '../../../Middleware/AuthenticationMiddleware';

const router = express.Router();

router.post('/Login', ClientController.login);

export default router;