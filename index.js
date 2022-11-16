// Import packages
const express = require("express");
const path = require("path");
const home = require("./routes/home");
const index = require("./routes/index")

// Middlewares
const app = express();
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
// Routes
app.use("/home", home);
app.use("/", index);
// connection for local server
const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));
