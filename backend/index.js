import express from "express";
import cors from "cors"; // Import the cors package
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import booksRoute from "./routes/booksRoute.js"

const app = express();
//middleware for parsing request body
app.use(express.json());


//Look at that policy
app.use(cors())

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("welcome to ASSAN");
});

app.use("/books",booksRoute)

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to db");
    app.listen(PORT, () => {
      console.log(`App is listening to ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
