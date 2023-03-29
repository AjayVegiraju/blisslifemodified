const Appointment = require('../models/appointmentSchema');

module.exports.deleteAppointment = async (req, res) => {
  try {
    const { appointmentId } = req.params;

    if (!appointmentId) {
      return res.status(400).json({ message: 'Please provide the appointment ID.' });
    }

    const appointment = await Appointment.findById(appointmentId);

    if (!appointment) {
      return res.status(404).json({ message: 'Appointment not found.' });
    }

    await Appointment.findByIdAndDelete(appointmentId);
    res.status(200).json({ message: 'Appointment deleted successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting appointment: ' + error.message });
  }
};

