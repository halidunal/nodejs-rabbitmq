const express = require("express");
const app = express();
const router = express.Router();
const bodyParser = require("body-parser");
const emailPublisher = require("./publisher")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

router.get("/",(req,res,next) => {
  res.send("running")
})

router.post("/register",async(req,res,next) => {
  const {email} = req.body;

  await emailPublisher(email);
  res.status(200).json({message: "Registration successful. Check your emails."})
})

app.use("/",router);

const PORT = 5000;

app.listen(PORT, () => {
  console.log("server is running on port:", PORT);
});
