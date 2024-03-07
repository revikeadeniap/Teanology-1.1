import express from "express";
import {
  getBevs,
  getBevById,
  createBev,
  updateBev,
  deleteBev
} from "../controllers/Bevs.js";
import { verifyUser, staffBev } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/bevs', getBevs);
router.get('/bevs/:id', getBevById);
router.post('/bevs', createBev);
router.patch('/bevs/:id', updateBev);
router.delete('/bevs/:id', deleteBev);

export default router;