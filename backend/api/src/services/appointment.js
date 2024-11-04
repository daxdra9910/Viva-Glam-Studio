import { Appointment } from "../models/appointment.js";

export const createAppointment = async (appointmentData) => {
  const { name, phone, service, date } = appointmentData;

  // validar datos
  if (!name || !phone || !service || !date) {
    throw new Error("Todos los campos son obligatorios.");
  }
  //llama al modelo de la base de datos y guarda la cita
  const appointment = await Appointment.create({
    name,
    phone,
    service,
    date,
  });
  //retorna la cita creada
  return appointment;
};

export const getAllAppointments = async () => {
  //llama al modelo de la base de datos y obtiene todas las citas
  const appointments = await Appointment.findAll();
  return appointments;
};
