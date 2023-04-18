const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();

app.use(bodyParser.json());
app.use(cors());

const users = [
  { username: "user1", password: "password1" },
  { username: "user2", password: "password2" },
];

const secretKey = "mysecretkey";

function generateAccessToken(username) {
  return jwt.sign(username, secretKey, { expiresIn: "30m" });
}

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  const user = users.find((u) => u.username === username);

  if (!user) {
    return res.status(401).send("Invalid username or password");
  }

  bcrypt.compare(password, user.password, (err, result) => {
    if (err || !result) {
      return res.status(401).send("Invalid username or password");
    }

    const accessToken = generateAccessToken({ username: user.username });

    res.json({ accessToken });
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
