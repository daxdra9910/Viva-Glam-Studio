import express from "express";
import cors from "cors";
import appointmentRoutes from "./routes/appointment.js";

const app = express();

// Configuración de CORS para permitir el acceso desde http://192.168.1.8:3002
const corsOptions = {
  origin: "http://192.168.1.8:3002", // Actualiza el origen permitido
};
app.use(cors(corsOptions));

app.use(express.json());

// Rutas
app.use("/appointments", appointmentRoutes);

export default app;
