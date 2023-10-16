import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT || 5000;
const MongoDBUrl = process.env.MONGODB;
const app = express();

mongoose
  .connect(MongoDBUrl)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
