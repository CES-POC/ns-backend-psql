import express from "express";
import {
  createPlantLocation,
  findallPlantlocation,
  findPlantlocation,
} from "../services/plantLocationServices.js";
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { plant_name, location, floor, area } = req.body;
    const Plantlocation = await createPlantLocation({
      plant_name,
      location,
      floor,
      area,
    });
    if (Plantlocation) {
      res.status(201).send({ status:true,message:"Plantlocation Created Successfully",Plantlocation});
    } else {
      res.status(409).send("something went wrong");
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.get("/", async (req, res) => {
  try {
    const PlantLocations = await findallPlantlocation();
    if (PlantLocations) {
      res.status(201).send({ status:true,message:"found all PlantLocations",PlantLocations});
    } else {
      res.status(409).send("something went wrong");
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const PlantLocationbyId = await findPlantlocation(req.params.id);
    if (PlantLocationbyId) {
      res.status(201).send({ status:true,message:"PlantLocations found",PlantLocationbyId});
    } else {
      res.status(409).send("something went wrong");
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
});

export default router;
