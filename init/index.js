require("dotenv").config();

const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const dbUrl = process.env.ATLASDB_URL;

async function main() {
    await mongoose.connect(dbUrl);
    console.log("Connected to MongoDB Atlas");
}

main()
    .then(async () => {
        await initDB();
        mongoose.connection.close();
    })
    .catch((err) => {
        console.log(err);
    });

const initDB = async () => {
    await Listing.deleteMany({});

    const data = initData.data.map((obj) => ({
        ...obj,
        owner: "690b9316f3d089df994714e0",
    }));

    await Listing.insertMany(data);

    console.log("Data was initialized successfully!");
};