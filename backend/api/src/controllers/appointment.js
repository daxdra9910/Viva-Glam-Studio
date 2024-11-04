import {
  createAppointment,
  getAllAppointments,
} from "../services/appointment.js";

export const postAppointment = async (req, res) => {
  try {
    const { name, phone, service, date } = req.body;

    // Validar que todos los datos requeridos estén presentes
    if (!name || !phone|| !service|| !date) {
      return res.status(400).json({
        error: "Todos los campos son obligatorios.",
        code: 400,
      });
    }
    //llamado al servicio
    const appointment = await createAppointment({
      name,
      phone,
      service,
      date,
    });
    res.status(201).json({
      message: "Cita creada exitosamente.",
      appointment,
    });
  } catch (error) {
    console.error("Error al crear la cita:", error);

    // Responder con codigo 500 si hay error de servidor
    res.status(500).json({
      error: "Error al crear la cita.",
      details: error.message,
      code: 500,
    });
  }
};

export const getAppointments = async (req, res) => {
  try {
    //llamado al servicio
    const appointments = await getAllAppointments();
    // Verificar si no hay citas
    if (appointments.length === 0) {
      return res.status(404).json({
        message: "No hay citas disponibles.",
        code: 404,
      });
    }
    res.status(200).json(appointments);
  } catch (error) {
    console.error("Error al obtener las citas:", error);
    res.status(500).json({ error: "Error al obtener las citas." });
  }
};
