// routes/appointmentRoutes.js
import express from "express";
import {
  bookAppointment,
  getMyAppointments,
  rescheduleAppointment,
  cancelAppointment,
} from "../controllers/appointment.controller.js";
import { verifyJWT } from "../middleware/auth.middleware.js";


const router = express.Router();

router.route("/").post(verifyJWT, bookAppointment).get( getMyAppointments);
router.route("/:id/reschedule").put( rescheduleAppointment);
router.route("/:id/cancel").put(cancelAppointment);

export default router;
