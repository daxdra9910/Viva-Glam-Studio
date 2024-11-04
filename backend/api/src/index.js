import app from "./app.js";
import { sequelize } from "./database/database.js";
import { loadModels } from "./database/loadModel.js";

async function onServerStart() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    await loadModels();
    app.listen(3001);
    console.log("Server is listening on port 3001");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

onServerStart();
