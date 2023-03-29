const expressAsyncHandler = require("express-async-handler");
const Appointment = require("../../models/");

module.exports.createAppointment = async (req, res) => {
  try {
    const { expert, startTime, endTime } = req.body;

    if (!expert || !startTime || !endTime) {
      return res.status(400).json({ message: 'Please provide all required fields: expert, startTime, and endTime.' });
    }

    const newAppointment = new Appointment({
      expert,
      startTime: new Date(startTime),
      endTime: new Date(endTime)
    });

    const savedAppointment = await newAppointment.save();
    res.status(201).json(savedAppointment);
  } catch (error) {
    res.status(500).json({ message: 'Error creating appointment: ' + error.message });
  }
};