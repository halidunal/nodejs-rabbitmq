const express = require("express");
const app = express();
const router = express.Router();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

router.get("/",(req,res,next) => {
  res.send("running")
})

router.post("/test",(req,res,next) => {
  const {email} = req.body;
  setTimeout(() => {
    res.status(200).json({email: email, date: Date.now()})
  }, 10000);
})

const PORT = 5000;

app.listen(PORT, () => {
  console.log("server is running on port:", PORT);
});
