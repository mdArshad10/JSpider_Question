import express from "express";

const app = express();

app.get("/", (req, res) => {
  const questions = [
    "what is java?",
    "what is varible",
    "Difference between Global and local variable",
    "what is static",
    "What is non-static",
    "what is Block",
    "why static has one copy",
    "why non-static has multiply copy",
    "what is object",
    "what is Reference Variable?"
  ];
  console.log(questions.length);

  let position = Math.floor(Math.random()*10);
  let question = questions[position];
  res.status(400).json({
    question,
    status: 201,
  });
});

app.listen(5000, () => {
  console.log(`your server is started at port: ${5000}`);
});
