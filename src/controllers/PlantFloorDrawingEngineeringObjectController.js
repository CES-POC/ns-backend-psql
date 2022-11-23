import express from "express";
import {
  createPlantFloorDrawingEngineeringObject,
  findPlantFloorDrawingEngineeringObject,
  findallPlantFloorDrawingEngineeringObject,
} from "../services/PlantFloorDrawingEngineeringObjectServices.js";
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { componentjson, dataFormJsonValues, PlantFloorDrawing_id } =
      req.body;
    const PlantFloorDrawingEngineeringObject =
      await createPlantFloorDrawingEngineeringObject({
        componentjson,
        dataFormJsonValues,
        PlantFloorDrawing_id,
      });
    if (PlantFloorDrawingEngineeringObject) {
      res
        .status(201)
        .send({
          status: true,
          message: "PlantFloorDrawingEngineeringObject Created Successfully",
          PlantFloorDrawingEngineeringObject,
        });
    } else {
      res.status(409).send("something went wrong");
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.get("/", async (req, res) => {
  try {
    const PlantFloorDrawingEngineeringObjects =
      await findallPlantFloorDrawingEngineeringObject ();
    if (PlantFloorDrawingEngineeringObjects) {
      res
        .status(201)
        .send({
          status: true,
          message: "found all PlantFloorDrawingEngineeringObjects",
          PlantFloorDrawingEngineeringObjects,
        });
    } else {
      res.status(409).send("something went wrong");
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const PlantFloorDrawingEngineeringObjectbyId =
      await findPlantFloorDrawingEngineeringObject(req.params.id);
    if (PlantFloorDrawingEngineeringObjectbyId) {
      res
        .status(201)
        .send({
          status: true,
          message: " PlantFloorDrawingEngineeringObject found",
          PlantFloorDrawingEngineeringObjectbyId,
        });
    } else {
      res.status(409).send("something went wrong");
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
});

export default router;
