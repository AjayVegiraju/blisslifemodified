import mongoose from 'mongoose'

const appointmentSchema = new mongoose.Schema({
  expert: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Expert',
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  startTime: {
    type: Date,
    required: true,
  },
  endTime: {
    type: Date,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ['available', 'booked', 'cancelled'],
    default: 'available',
  },
});

module.exports = mongoose.model('Appointment', appointmentSchema);

export const Appointment = mongoose.model('Appointment', appointmentSchema)