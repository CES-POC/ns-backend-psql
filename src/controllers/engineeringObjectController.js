import express from "express";
import {
  createEngineeringObject,
  findEngineeringObject,
  findallEngineeringObject,
} from "../services/engineeringObjectServices.js";
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, type, displayName, shape, dataformjson } = req.body;
    const EngineeringObject = await createEngineeringObject({
      name,
      type,
      displayName,
      shape,
      dataformjson,
    });
    if (EngineeringObject) {
      res.status(201).send({status:true,message:"EngineeringObject Created Successfully",EngineeringObject});
    } else {
      res.status(409).send("something went wrong");
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.get("/", async (req, res) => {
  try {
    const  EngineeringObjects = await findallEngineeringObject();
    if (EngineeringObjects) {
      res.status(201).send({ status:true,message:"found all EngineeringObjects", EngineeringObjects });
    } else {
      res.status(409).send("something went wrong");
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const EngineeringObjectbyId = await findEngineeringObject(req.params.id);
    if (EngineeringObjectbyId) {
      res.status(201).send({ status:true,message:" EngineeringObject found", EngineeringObjectbyId });
    } else {
      res.status(409).send("something went wrong");
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
});

export default router;
