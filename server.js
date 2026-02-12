const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static("public"));

let reviews = [];

app.get("/reviews", (req, res) => {
  res.json(reviews);
});

app.post("/reviews", (req, res) => {
  const review = req.body;
  reviews.push(review);
  res.json({ message: "レビュー追加成功" });
});

app.listen(PORT, () => {
  console.log(`サーバー起動 http://localhost:${PORT}`);
});