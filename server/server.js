const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

let links = [];

app.get("/links", (req, res) => {
  res.json(links);
});

app.post("/links", (req, res) => {
  const { link } = req.body;
  if (link) {
    links.push(link);
    res.json({ success: true });
  } else {
    res.status(400).json({ error: "Invalid link" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
