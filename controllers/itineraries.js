import Itinerary from "../models/itineraries.js";

export const getItineraries = async (req, res) => {
  try {
    const itineraries = await Itinerary.find();
    res.json(itineraries);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const getItinerary = async (req, res) => {
  try {
    const { id } = req.params;
    const itinerary = await Itinerary.findById(id);

    if (itinerary) {
      return res.json(itinerary);
    }

    res.status(400).json({ message: "Itinerary not found!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const createItinerary = async (req, res) => {
  try {
    const itinerary = new Itinerary(req.body);
    await itinerary.save();
    res.status(201).json(itinerary);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const updateItinerary = async (req, res) => {
  const { id } = req.params;
  const itinerary = await Itinerary.findByIdAndUpdate(id, req.body);
  res.status(200).json(itinerary);
};

export const deleteItinerary = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Itinerary.findByIdAndDelete(id);

    if (deleted) {
      return res.status(200).send("Itinerary deleted!");
    }

    throw new Error("Itinerary not found");
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
