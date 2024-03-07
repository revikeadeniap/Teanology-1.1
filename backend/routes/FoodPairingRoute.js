import express from "express";
import {
  getFoodPairings,
  getFoodPairingById,
  createFoodPairing,
  updateFoodPairing,
  deleteFoodPairing
} from "../controllers/FoodPairings.js";


const router = express.Router();

router.get('/foodPairings', getFoodPairings);
router.get('/foodPairings/:id', getFoodPairingById);
router.post('/foodPairings', createFoodPairing);
router.patch('/foodPairings/:id', updateFoodPairing);
router.delete('/foodPairings/:id', deleteFoodPairing);

export default router;