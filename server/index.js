import path from "path";
import { fileURLToPath } from "url";
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import postRoutes from "./routes/posts.route.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.static(path.join(__dirname, "public")));

app.use("/posts", postRoutes);
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

const PORT = process.env.PORT || 4000;

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port : ${PORT}`))
  )
  .catch((error) => console.log(error.message));

// mongoose.set("useFindAndModify", false);
