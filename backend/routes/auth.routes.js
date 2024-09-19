import express from "express";
import { login, logout, signup } from "../controllers/auth.controllers.js";

const router = express.Router();

router.post("/login", login);
router.post("/logout", signup);
router.post("/signup", logout);

export default router;
