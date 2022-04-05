const express = require("express");
const app = express();
const cors = require("cors")

app.use(cors())
app.use(express.json());

let movies = [
  {
    id: 1,
    movie: "Shutter Island",
  },
];

app.get("", (_, res) => {
  return res.json(movies);
});

app.post("", (req, res) => {
  const { movie } = req.body;
  const note = { id: movies.length + 1, movie };
  movies = [...movies, note];
  return res.json(note);
});

app.delete("/:id", (req, res) => {
  const { id } = req.params;
  movies = [...movies.filter((e) => e.id === id)];
  return res.json({ message: "success" });
});

const port = 8080;

app.listen(port, () => {
  console.log(`Listening on port ${port} .....`);
});
