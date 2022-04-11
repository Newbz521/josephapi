import { Router } from "express";
import * as controllers from "../controllers/itineraries.js";

const router = Router();

router.get("/itineraries", controllers.getItineraries);
router.get("/itineraries/:id", controllers.getItinerary);
router.post("/itineraries", controllers.createItinerary);
router.put("/itineraries/:id", controllers.updateItinerary);
router.delete("/itineraries/:id", controllers.deleteItinerary);

export default router;
