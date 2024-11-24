import "dotenv/config";
import express from "express";
import apiV1Router from "./v1/routes/index.js";
import cors from "cors";

const app = new express();
app.use(express.json());
app.use(cors());
app.use("/api/v1", apiV1Router);

app.listen(process.env.EXPRESS_PORT, () => {
  console.log(`Backend app started at port ${process.env.EXPRESS_PORT}`);
});
