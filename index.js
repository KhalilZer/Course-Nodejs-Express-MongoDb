const express = require("express");
const app = express(); /* Create Our Server with the app name */
const mongoose = require("mongoose");
const Restaurant = require("./models/restaurant-model"); //Include and call our Model
const port = 3000;

//Use a json express midleware to allow json architecture
app.use(express.json());

//Get All Restaurants
app.get("/restaurants", async (req, res) => {
  try {
    const allRestaurants = await Restaurant.find();
    return res.status(200).json(allRestaurants);
  } catch (error) {
    res.status(500).json({ message: "Internal Error", error });
  }
});

//Get One  Restaurant By ID not _id
app.get("/restaurant/:id", async (req, res) => {
  try {
    const restaurant = await Restaurant.findOne({
      id: parseInt(req.params.id),
    });
    if (!resaurant) {
      res.status(404).json({ message: "Restaurant not founded" });
    } else {
      res.status(200).json(restaurant);
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Error", error });
  }
});

//Add a new Restaurant
app.post("/restaurant", async (req, res) => {
  const RestaurantAdded = new Restaurant(req.body);

  try {
    await RestaurantAdded.save();

    res.status(200).json("Restaurant Added Succefully");
  } catch (error) {
    res.status(500).json({ message: "Internal Error", error });
  }
});

//Update one Restaurant With ID not _id
app.put("/restaurant/:id", async (req, res) => {
  const { title } = req.body;
  try {
    const restaurant = await Restaurant.findOneAndUpdate(
      {
        id: parseInt(req.params.id),
      },
      { title },
      { new: true }
    );
    if (!resaurant) {
      res.status(404).json({ message: "Restaurant not founded" });
    } else {
      res
        .status(200)
        .json({ message: "Resturant has been updated ", restaurant });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Error", error });
  }
});

//Delete one Restaurant with ID not  _id
app.delete("/restaurant/:id", async (req, res) => {
  const restaurant = await Restaurant.findOneAndDelete({
    id: parseInt(req.params.id),
  });

  if (!restaurant) {
    res.status(404).json({ message: "Restaurant not founded" });
  } else {
    res.status(200).json({ message: "Restaurant has been deleted succefully" });
  }
});

//Run the SERVER on port 3000
app.listen(port, () => {
  console.log(`Application listenning at the port ${port}`);
});

//Make a MongoDB CONNECTION DB name is : Restaurant
mongoose
  .connect("mongodb://localhost:27017/Restaurant")
  .then(() => {
    console.log("Connection success");
  })
  .catch((err) => {
    console.log(`connection Error  ${err}`);
  });
