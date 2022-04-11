import mongoose from "mongoose";
const Schema = mongoose.Schema;

let Itinerary = new Schema({
  city: { type: String },
  arrival: { type: String },
  departure: { type: String },
  timeOfStay: { type: Number },
  img: { type: String },
});

export default mongoose.model("itineraries", Itinerary);
