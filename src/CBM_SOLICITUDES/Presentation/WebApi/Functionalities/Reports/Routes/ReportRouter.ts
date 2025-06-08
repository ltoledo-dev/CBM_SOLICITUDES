import express from "express";
import * as ReportController from "../Controllers/ReportController";

const router = express.Router();

router.get("/solicitudes-por-dia", ReportController.getRequestsPerDay);
router.get("/clientes-con-solicitudes", ReportController.getClientsWithRequests);
router.get("/clientes-con-total-productos", ReportController.getClientsWithTotalProducts);
router.get("/productos-con-fechas-ingreso", ReportController.getProductsWithEntryDates);
router.get("/solicitudes-con-estado", ReportController.getRequestsWithStatus);

export default router;