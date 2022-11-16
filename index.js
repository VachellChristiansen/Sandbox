// Import packages
const express = require("express");
const path = require("path");
const app = require("./src/core/server");
const config = require("./src/core/config");
// Import Routes
const user = require("./routes/UserRoute");
const index = require("./routes/IndexRoute");

// Middlewares
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
// Routes
app.use("/", index);
app.use("/user", user);
// connection for local server
const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));
