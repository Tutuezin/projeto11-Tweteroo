import express from "express";
import cors from "cors";
import chalk from "chalk";

const app = express();
app.use([cors(), express.json()]);

const users = [];
const tweets = [];

//SIGN-UP
app.get("/sign-up", (req, res) => {
  res.send(users);
});

app.post("/sign-up", (req, res) => {
  const user = req.body;
  users.push(user);

  console.log(user);
  res.send("OK");
});

//TWEETS
app.get("/tweets", (req, res) => {
  res.send(tweets);
});

app.post("/tweets", (req, res) => {
  const { avatar } = users[users.length - 1];
  const tweet = req.body;
  tweet.avatar = avatar;

  tweets.unshift(tweet);
  if (tweets.length > 10) {
    tweets.pop();
  }

  res.send("OK");
});

app.listen(5000, () => {
  console.log(chalk.bold.green("Rodando..."));
});
