// models/Appointment.js
import mongoose, { Schema } from "mongoose";

const appointmentSchema = new Schema({
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  date: {
    type: Date,
    required: true,
  },
  timeSlot: {
    type: String,
    required: true,
  },

  reason: String,

  status: {
    type: String,
    enum: ["pending", "confirmed", "cancelled", "completed"],
    default: "pending",
  },
});

export const appointment = mongoose.model("appointment", appointmentSchema);
