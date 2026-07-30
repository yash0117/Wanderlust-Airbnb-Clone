const mongoose = require("mongoose");
require("dotenv").config();

const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = process.env.ATLASDB_URL;

async function main() {
    await mongoose.connect(MONGO_URL);
    console.log("Connected to MongoDB Atlas");
}

main()
    .then(() => initDB())
    .catch((err) => console.log(err));

const initDB = async () => {
    await Listing.deleteMany({});

    const data = initData.data.map((obj) => ({
        ...obj,
        owner: "690b9316f3d089df994714e0", // Existing User ID
    }));

    await Listing.insertMany(data);

    console.log("✅ Data initialized successfully!");
    process.exit();
};