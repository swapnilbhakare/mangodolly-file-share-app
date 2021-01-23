require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");

const connectDB = require("./config/db");
connectDB();

app.use(express.json());
// Template engin

app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");
app.use(express.static("public"));
// routes
app.use("/api/files", require("./routes/files"));
app.use("/files", require("./routes/show"));
app.use("/files/download", require("./routes/download"));

app.listen(port, () => {
  console.log(`Listening on port http:localhost:${port}`);
});
