import express from "express";
import cors from "cors";
import chalk from "chalk";

const app = express();
app.use([cors(), express.json()]);

const users = [];
const tweets = [];

app.get("/sign-up", (req, res) => {
  res.send(users);
});

app.post("/sign-up", (req, res) => {
  const user = req.body;
  users.push(user);

  console.log(user);
  res.send("OK");
});

app.get("/tweets", (req, res) => {
  res.send(tweets);
});

app.listen(5000, () => {
  console.log(chalk.bold.green("Rodando..."));
});
