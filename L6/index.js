import express from "express";
import path from "path";
import bodyParser from "body-parser";

// router imports
import { apiRouter } from "./routes/api.js";

const __dirname = path.resolve(path.dirname(""));
const PORT = 3000;
const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api", apiRouter);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/html/index.html"));
});

app.get("/kontakt", (req, res) => {
  res.sendFile(path.join(__dirname, "/html/contact.html"));
});

app.post("/kontakt", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
