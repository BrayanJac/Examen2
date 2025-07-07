const port = 3008;
const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect(`mongodb+srv://bjjacome1:pL38WUQFY70AOvZU@cable.simb9g0.mongodb.net/?retryWrites=true&w=majority&appName=Cable`,
    {useNewUrlParser: true,
    useUnifiedTopology: true});

const db = mongoose.connection;

db.on("error", (error) => console.error(error));
db.once("open", () => console.log("System connected to MongoDb Database"));

app.use(express.json());

const cableRouter = require("./routes/cableRoutes");

app.use("/api", cableRouter);

app.listen(port, () => console.log("MY Computer Store Server is running is a port --->" + port));