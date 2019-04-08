const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/cat_app", { useNewUrlParser: true });

// Pattern
let catSchema = new mongoose.Schema({
  name: String,
  age: Number,
  temperament: String
});

// Methods and Model // Collection called Cat
let Cat = mongoose.model("Cat", catSchema);

// // Adding a new cat to the DB
// let george = new Cat({
//   name: "Mr. Depp",
//   age: 12,
//   temperament: "Good"
// });

// george.save((err, cat) => {
//   if (err) {
//     console.log("something went wrong");
//   } else {
//     console.log("we just saved a cat");
//     console.log(cat);
//   }
// });

// New and Save at once => create
Cat.create({
  name: "Snow White",
  age: 15,
  temperament: "Bland"
}, (err, cat) => {
  if (err) {
    console.log(err);
  } else {
    console.log(cat);
  }
})

// Retrieve all cats from the DB and console.log each one
Cat.find({}, (err, cats) => {
  if (err) {
    console.log("something went wrong");
    console.log(err);
  } else {
    console.log("All the Cats...");
    console.log(cats);
  }
})