import db from "../config/db.js";

export const createEngineeringObject=(data)=> {
    return db.engineeringObject.create({
      data: data,
    });
  }

  
  export const findEngineeringObject= (id) => {
    return db.engineeringObject.findUnique({
      where: {
        id,
      },
    });
  };  


  export const findallEngineeringObject = ( ) => {
    return db.engineeringObject.findMany();
  };  




