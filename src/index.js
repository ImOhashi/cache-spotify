require("dotenv/config");
const express = require("express");
const spotify = require("./lib/spotify");

const app = express();
const port = process.env.PORT || 3000;

app.get("/spotify", async (req, res) => {
  const params = req.query;

  const result = await spotify.recommendation(params);

  return res.json(result);
});

app.listen(port, () => console.log(`Server listening on port: ${port}`));
