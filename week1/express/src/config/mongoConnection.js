// connect to mongoDB database
const mongoose = require("mongoose");
const config = require("dotenv").config().parsed;
const db = config.MONGODB_URI;

function connect() {

    mongoose.connection.on("error", (error) => {
        console.error("Error in MongoDb connection: " + error);
        mongoose.disconnect();
    });

    mongoose.connection.on("disconnected", () => {
        console.log("MongoDB disconnected! Reconnecting...");
        connect();
    });

    mongoose.connection.on("connected", () => {
        console.log("MongoDB connected!");
    });

    mongoose.connection.on("open", () => {
        console.log("MongoDB connection opened!");
    });

    mongoose.set("debug", true);
    mongoose.set("strictQuery", false);
    mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true });
}

module.exports = {
    connect,
};
