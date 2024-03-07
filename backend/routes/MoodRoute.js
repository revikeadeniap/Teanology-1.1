import express from "express";
import {
  getMoods,
  getMoodById,
  createMood,
  updateMood,
  deleteMood
} from "../controllers/Moods.js";

const router = express.Router();

router.get('/moods', getMoods);
router.get('/moods/:id', getMoodById);
router.post('/moods', createMood);
router.patch('/moods/:id', updateMood);
router.delete('/moods/:id', deleteMood);

export default router;