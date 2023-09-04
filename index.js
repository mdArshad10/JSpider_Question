import express from "express";

const app = express();

app.get("/", (req, res) => {
  res
    .status(400)
    .json({
      message:
        "hi this is the my first application which is deployed at github page",
      status: 201,
    });
});

app.listen(5000, () => {
  console.log(`your server is started at port: ${5000}`);
});
