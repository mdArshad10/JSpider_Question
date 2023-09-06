import express from "express";
import { questions } from "../Question.js";

const router = express.Router();

router.get("/", (req, res) => {
  console.log(questions.sql);
  res.status(200).json({
    message: "conguration ",
    status: 200,
  });
});

export default router;
