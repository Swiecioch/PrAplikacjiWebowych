import express from "express";
import path from "path";
import bodyParser from "body-parser";
import mysql from "mysql";

// router imports
import { apiRouter } from "./routes/api.js";
import { connect } from "http2";

const __dirname = path.resolve(path.dirname(""));
const PORT = 3000;
const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const connection = mysql.createConnection({
  hostname: "127.0.0.1",
  user: "root",
  password: "", 
  port: 3306,
  database: "zadanie",
})
app.use("/api", apiRouter);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/html/index.html"));
});

app.get("/kontakt", (req, res) => {
  res.sendFile(path.join(__dirname, "/html/contact.html"));
});

app.post("/kontakt", (req, res) => {
  connection.connect((err) => {
    if(err) {
      throw err
    } else {
      const sql = `INSERT INTO form values(null, '${req.body.name}', '${req.body.email}', '${req.body.topic}', '${req.body.message}')`
      connection.query(sql, (err, result) => {
        if (err) {
          connection.end()
          throw err
        } else {
          connection.end()
        }
      })
    res.redirect('/')
    }
  })
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
