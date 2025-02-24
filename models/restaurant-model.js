const mongoose = require("mongoose");

const restaurantSchema = mongoose.Schema({
  id: Number,
  title: String,
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema);
module.exports = Restaurant;
