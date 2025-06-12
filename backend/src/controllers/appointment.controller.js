// controllers/appointmentController.js

import AppointmentModel from "../models/Appointment.model.js";

// Book Appointment
export const bookAppointment = async (req, res) => {
  try {
    const { doctor, appointmentDate, reason } = req.body;

    const appointment = await AppointmentModel.create({
      patient: req.user._id,
      doctor,
      appointmentDate,
      reason,
    });

    res.status(201).json(appointment);
  } catch (error) {
    res.status(500).json({ message: "Error booking appointment", error });
  }
};

// Get Appointments for user
export const getMyAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find({ patient: req.user._id })
      .populate("doctor", "name email")
      .sort({ appointmentDate: -1 });

    res.json(appointments);
  } catch (error) {
    res.status(500).json({ message: "Error fetching appointments" });
  }
};

// Reschedule Appointment
export const rescheduleAppointment = async (req, res) => {
  try {
    const { id } = req.params;
    const { newDate } = req.body;

    const appointment = await Appointment.findById(id);

    if (!appointment || appointment.patient.toString() !== req.user._id.toString()) {
      return res.status(404).json({ message: "Appointment not found" });
    }

    appointment.appointmentDate = newDate;
    await appointment.save();

    res.json({ message: "Appointment rescheduled", appointment });
  } catch (error) {
    res.status(500).json({ message: "Error rescheduling appointment" });
  }
};

// Cancel Appointment
export const cancelAppointment = async (req, res) => {
  try {
    const { id } = req.params;

    const appointment = await Appointment.findById(id);

    if (!appointment || appointment.patient.toString() !== req.user._id.toString()) {
      return res.status(404).json({ message: "Appointment not found" });
    }

    appointment.status = "cancelled";
    await appointment.save();

    res.json({ message: "Appointment cancelled", appointment });
  } catch (error) {
    res.status(500).json({ message: "Error cancelling appointment" });
  }
};
