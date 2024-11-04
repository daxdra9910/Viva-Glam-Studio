import "../models/appointment.js";
import { sequelize } from "../database/database.js";

export async function loadModels() {
  try {
    sequelize.sync({alter:true});
    console.log("Models loaded successfully");
  } catch (error) {
    console.error("Unable to load models:", error);
  }
}
