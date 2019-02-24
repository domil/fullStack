const express = require("express");
const mongoose = require("mongoose");
const user = require("./routes/user");
const profile = require("./routes/profile");
const post = require("./routes/post");

const app = express();
const mongooseURI = require("./config/keys").mongoURI;

// app.use routes
app.use("/api/user", user);
app.use("/api/profile", profile);
app.use("/api/post", post);

mongoose
  .connect(mongooseURI)
  .then(() => console.log("connected"))
  .catch(err => console.log("error ", err));

const port = process.env.port || 3000;

app.listen(port, () => {
  console.log(`Listening to ${port}`);
});
