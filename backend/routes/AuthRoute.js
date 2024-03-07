import express from "express";
import { login, logOut, me } from "../controllers/Auth.js";

const router = express.Router();

router.get('/me', me);
router.post('/login', login);
router.delete('/logout', logOut);

export default router;