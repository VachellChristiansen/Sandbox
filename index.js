const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", async (req, res, next) => {
  return res.status(200).json({
    title: "Express Testing",
    message: "The app is working properly!",
  });
});

app.listen(8080, () => {
  console.log("listening on port 8080");
});
