// Import packages
const express = require("express");
const path = require("path");
const app = require(path.join(__dirname, "./src/core/server"));
const config = require(path.join(__dirname, "./src/core/config"));
// Import Routes
const user = require(path.join(__dirname, "./routes/UserRoute"));
const index = require(path.join(__dirname, "./routes/IndexRoute"));

// Middlewares
app.use(express.json());
app.set('view engine', 'ejs');
app.engine('ejs', require('ejs').__express);
app.set('views', path.join(__dirname, 'views'));
// Routes
app.use("/", index);
app.use("/user", user);
// connection for local server
const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));
