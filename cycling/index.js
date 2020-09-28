const express = require('express')
const session = require('express-session')

const crypto = require('crypto');

const flag = "AMCOM{C00K13$_4R3_V3RY_T4STY}"
const chunks = []

for (let i = 0; i < flag.length; i += 3)
    chunks.push(flag.substr(i,3))

hashedChunks = chunks.map(chunk => crypto.createHash('md5').update(chunk).digest("hex"));

const app = express()
app.use(session({
  secret: '343jihfodusjenwjfn',
  resave: false,
  saveUninitialized: false
}));

app.get("*", (req, res) => {
    const chunkIdx = req.session.idx || 0;
    res.set('flagpart', hashedChunks[chunkIdx]);
    req.session.idx = (chunkIdx + 1) % hashedChunks.length;
    res.send("Yes, this is a completely normal page that does not change every time you refresh.");
});

app.listen(80);
