import express from "express";
import {
  checkAnswer,
  getMyProfile,
  login,
  logout,
  register,
  getAllUser,
   
} from "../controllers/user.js";

import {authorizeRoles} from "../middlewares/auth.js"
// import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/signup", register);
router.post("/login", login);

router.get("/logout", logout);

router.get("/profile", getMyProfile);
router.post("/answer/:id", checkAnswer);
router.get("/users",getAllUser);

export default router;
