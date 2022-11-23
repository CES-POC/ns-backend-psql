import bcrypt from "bcrypt";
import express from "express";
import jwt from "jsonwebtoken";
import { saveUser } from "../middleware/userAuth.js";
import {
  createUser,
  findUserByEmail,
  findUserById,
} from "../services/authServices.js";
import { generateTokens } from "../utils/jwt.js";
import {
  loginValidation,
  signupValidation,
} from "../validation/authValidation.js";
const router = express.Router();

router.post("/register", saveUser, async (req, res) => {
  try {
    await signupValidation.validateAsync(req.body);
    const { fullname, username, email, empid, phone, password } = req.body;
    const user = await createUser({
      fullname,
      username,
      email,
      empid,
      phone,
      password,
    });
    if (user) {
      res.status(201).send({status: true,message:"User Created Successfully",user});
    } else {
      res.status(409).send("something went wrong");
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.post("/login", async (req, res) => {
  try {
    await loginValidation.validateAsync(req.body);
    const { email, password } = req.body;
    const User = await findUserByEmail(email);
    if (!User) {
      res.status(403);
      throw new Error("Invalid login credentials.");
    }
    const validPassword = await bcrypt.compare(password, User.password);
    if (!validPassword) {
      res.status(403);
      throw new Error("Invalid login credentials.");
    }
    const { id, username, empid } = User;
    const { accessToken, refreshToken } = generateTokens({
      id,
      username,
      email,
      empid,
    });
    res.cookie("refreshToken", refreshToken);
    res.status(201).send({ status: true, User: User, accessToken });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.post("/refreshtoken", async (req, res) => {
  const token = req.cookies.refreshToken;
  if (!token) return res.send({ message: "missing access token" });
  try {
    const payload = jwt.verify(token, process.env.JWT_REFRESH_SECRET);
    const user = await findUserById(payload.id);
    if (!user) return res.send({ message: "no user found" });
    const { id, username, empid, email } = user;
    const { accessToken, refreshToken } = generateTokens({
      id,
      username,
      email,
      empid,
    });
    res.cookie("refreshToken", refreshToken);
    return res.send({ accessToken });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

export default router;
