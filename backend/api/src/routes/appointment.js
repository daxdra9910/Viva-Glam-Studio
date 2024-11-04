import Router from "express";
import {
  getAppointments,
  postAppointment,
} from "../controllers/appointment.js";
const router = Router();

//rutas para cada metodo
router.get("/", getAppointments);
router.post("/", postAppointment);

export default router;
