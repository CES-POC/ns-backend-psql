import cookieParser from "cookie-parser";
import cors from "cors";
import * as dotenv from 'dotenv';
import express from "express";
import morgan from "morgan";
import authRoutes from "./controllers/authcontroller.js";
import plantLocationRoutes from "./controllers/plantLocationController.js";
import PlantFloorDrawingRoutes from "./controllers/PlantFloorDrawingController.js";
import EngineeringObjectRoutes from "./controllers/engineeringObjectController.js";
import PlantFloorDrawingEngineeringObjectRoutes from "./controllers/PlantFloorDrawingEngineeringObjectController.js";


if (process.env.NODE_ENV !== "production") {
  dotenv.config()
}

const PORT = process.env.PORT || 8000;
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(morgan("dev"));

//routes for the user API
app.use("/auth", authRoutes);
app.use("/plantlocation", plantLocationRoutes);
app.use("/PlantFloorDrawing", PlantFloorDrawingRoutes);
app.use("/EngineeringObject", EngineeringObjectRoutes);
app.use("/PlantFloorDrawingEngineeringObject", PlantFloorDrawingEngineeringObjectRoutes);

//listening to server connection
app.listen(PORT, () => console.log(`Server is connected on ${PORT}`));
