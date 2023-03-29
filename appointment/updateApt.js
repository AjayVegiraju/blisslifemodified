const Appointment = require('../models/appointmentSchema');

module.exports.updateAppointment = async (req, res) => {
  try {
    const { appointmentId } = req.params;
    const { expert, startTime, endTime, user, status } = req.body;

    if (!appointmentId) {
      return res.status(400).json({ message: 'Please provide the appointment ID.' });
    }

    const appointment = await Appointment.findById(appointmentId);

    if (!appointment) {
      return res.status(404).json({ message: 'Appointment not found.' });
    }

    if (expert) {
      appointment.expert = expert;
    }
    if (startTime) {
      appointment.startTime = new Date(startTime);
    }
    if (endTime) {
      appointment.endTime = new Date(endTime);
    }
    if (user) {
      appointment.user = user;
    }
    if (status) {
      appointment.status = status;
    }

    const updatedAppointment = await appointment.save();
    res.status(200).json(updatedAppointment);
  } catch (error) {
    res.status(500).json({ message: 'Error updating appointment: ' + error.message });
  }
};

