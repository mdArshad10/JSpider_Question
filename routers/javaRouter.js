import express from "express";
import { questions } from "../Question.js";

const router = express.Router();

router.get("/", (req, res) => {
  const position = Math.floor(Math.random() * 10);
  const question = questions.java[position];
  res.status(400).json({
    question,
    status: 200,
  });
});

export default router;
