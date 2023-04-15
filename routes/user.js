import express from "express";
import { getMyProfile, login, logout, register } from "../controllers/user.js";
// import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/signup", register);
router.post("/login", login);

router.get("/logout", logout);

router.get("/profile", getMyProfile);

export default router;
