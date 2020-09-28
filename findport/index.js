const express = require('express');
const app = express();
const port = Math.floor(Math.random() * 1000) + 45000;

app.get('*', (req, res) => {
  res.send(`AMCOM{${port}_P0RT_SCANNING_FTW}`);
});

server = app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
