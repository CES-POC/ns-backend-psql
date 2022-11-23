import db from "../config/db.js";

export const createPlantFloorDrawingEngineeringObject=(data)=> {
    return db.PlantFloorDrawingEngineeringObject.create({
      data: data,
    });
  }

  
  export const findPlantFloorDrawingEngineeringObject = (id) => {
    return db.PlantFloorDrawingEngineeringObject.findUnique({
      where: {
        id,
      },
    });
  };  


  export const findallPlantFloorDrawingEngineeringObject = ( ) => {
    return db.PlantFloorDrawingEngineeringObject.findMany();
  };  
