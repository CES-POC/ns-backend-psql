import { findUserByEmail, findUserByempid, findUserByusername } from "../services/authServices.js";

export const saveUser = async (req, res, next) => {
  try {
    const { username, email, empid } = req.body;
    const emailCheck = await findUserByEmail(email)
    if (emailCheck) res.status(409).send("email already taken");
    const empidCheck = await  findUserByempid(empid)
    if (empidCheck) res.status(409).send("emp id already taken");
    const usernameCheck = await findUserByusername(username)
    if (usernameCheck) res.status(409).send("username already taken"); 
    next();
  } catch (error) {
    console.log(error.message);
    res.status(400).send(error.message);
  }
};


