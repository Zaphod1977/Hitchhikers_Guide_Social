const fs = require("fs");
const mongoose = require("mongoose");

// Load models
const User = require("../models/user.js");
const Thought = require("../models/thought.js");


// Connect to DB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Read JSON files
const users = JSON.parse(
  fs.readFileSync(`${__dirname}/seeds/user-seeds.json`, "utf-8")
);
const thoughts = JSON.parse(
    fs.readFileSync(`${__dirname}/seeds/thought-seeds.json`, "utf-8")
  );

// Import into DB
const importData = async () => {
  try {
    await User.create(users);
    console.log("Data Imported...");
    await Thought.create(thoughts);
    console.log("Data Imported...");
    process.exit();
  } catch (err) {
    console.error(err);
  }
};

// Delete data
const deleteData = async () => {
  try {
    await User.deleteMany();
    console.log("Data Destroyed...");
    await Thought.deleteMany();
    console.log("Data Destroyed...");
    process.exit();
  } catch (err) {
    console.error(err);
  }
};

if (process.argv[2] === "-i") {
  importData();
} else if (process.argv[2] === "-d") {
  deleteData();
}