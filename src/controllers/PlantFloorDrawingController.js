import express from "express";
import { createPlantFloorDrawing } from "../services/plantFloorDrawing.js";
const router = express.Router();


router.post("/", async (req, res) => {
    try {
      const { plantlocation_id } = req.body;
      const PlantFloorDrawing = await createPlantFloorDrawing({
        plantlocation_id,
      });
      if (PlantFloorDrawing) {
        res.status(201).send({status:true,message:"PlantFloorDrawing Created Successfully",PlantFloorDrawing});
      } else {
        res.status(409).send("something went wrong");
      }
    } catch (error) {
      console.log(error.message);
      res.status(400).send(error.message);
    }
  });

  export default router;