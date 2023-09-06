import express from "express";

import sqlRoute from "./routers/sqlRouter.js";
import javaRoute from "./routers/javaRouter.js";
import htmlRoute from "./routers/htmlRouter.js";

const app = express();

app.use("/sql", sqlRoute);
app.use("/java", javaRoute);
app.use("/html", htmlRoute);

app.listen(5000, () => {
  console.log(`your server is started at port: ${5000}`);
});
