import { Router } from "express";
import itineraryRoutes from "./itineraries.js";

const router = Router();

router.get("/", (req, res) => res.send("This is the api root!"));

router.use("/", itineraryRoutes);

export default router;
