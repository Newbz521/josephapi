import db from "../db/connection.js";
import Itinerary from "../models/itineraries.js";
import { itineraries } from "./itineraries.js";

const insertData = async () => {
  // reset database
  await db.dropDatabase();

  // insert houses into database
  await Itinerary.insertMany(itineraries);

  // close db connection (done)
  db.close();
};

insertData();
