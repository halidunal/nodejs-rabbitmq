const express = require("express");
const app = express();
const router = express.Router();
const PORT = 5000;
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log("server is running on port:", PORT);
});
