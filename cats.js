const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/cat_app");

// Pattern
let catSchema = new mongoose.Schema({
  name: String,
  age: Number,
  temperament: String
});

// Methods and Model // Collection called Cat
let Cat = mongoose.model("Cat", catSchema);

// Adding a new cat to the DB


// Retrieve all cats from the DB and console.log each one