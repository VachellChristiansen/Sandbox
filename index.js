const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({
    "status": "OK",
    "message": "Success!"
  });
});

app.listen(8080, () => {
  console.log("listening on port 8080");
});

module.exports = app;
