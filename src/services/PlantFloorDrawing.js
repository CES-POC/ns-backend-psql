import db from "../config/db.js";

export const createPlantFloorDrawing=(data)=> {
    return db.PlantFloorDrawing.create({
      data: data,
    });
  }

  
  export const findPlantFloorDrawing = (id) => {
    return db.PlantFloorDrawing.findUnique({
      where: {
        id,
      },
    });
  };  


  export const findallPlantFloorDrawing = ( ) => {
    return db.PlantFloorDrawing.findMany();
  };  
