import express = require('express');
import * as RequestController from "../Controllers/RequestController";
import { authenticateJWT } from '../../../Middleware/AuthenticationMiddleware';

const router = express.Router();

router.use(authenticateJWT);
router.get("/solicitudes", RequestController.getAllRequest);
router.post("/solicitudes", RequestController.createRequest);
router.put("/solicitudes", RequestController.updateRequest);
router.delete('/solicitudes/:id', RequestController.deleteRequest);

export default router;