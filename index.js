const express = require("express");
const app = express();
const PORT = process.env.port || 3000;
app.use(express.json());

// routes starts here
app.post("/slack/events", (req, res) => {
  res.send({
    challange: req.body.challange,
  });
});

app.get("/", (req, res) => {
  res.send("Hello there , If you this it means server is up");
});

app.listen(PORT, () => {
  console.log("Magic happens at port", PORT);
});
