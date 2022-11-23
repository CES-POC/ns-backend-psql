import db from "../config/db.js";

export const createPlantLocation=(data)=> {
    return db.Plantlocation.create({
      data: data,
    });
  }

  
  export const findPlantlocation = (id) => {
    return db.Plantlocation.findUnique({
      where: {
        id,
      },
    });
  };  


  export const findallPlantlocation = ( ) => {
    return db.Plantlocation.findMany();
  };  




