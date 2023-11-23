import express from "express";
import path from "path";
import fs from "fs/promises";

const router = express.Router();
const __dirname = path.resolve(path.dirname(""));

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/json/apiRoutes.json"));
});

router.get("/students", async (req, res) => {
  const students = await readJsonFile("./json/students.json");
  res.json(students);
});

router.get("/students/:id", async (req, res) => {
  const studentId = req.params.id;
  const students = await readJsonFile("./json/students.json");

  const student = students.find(
    (student) => student.id === parseInt(studentId),
  );

  if (student) {
    res.json(student);
  } else {
    res.status(404).json({ error: 404, message: "Student not found" });
  }
});

router.get("/subjects", async (req, res) => {
  const subjects = await readJsonFile("./json/subjects.json");
  res.json(subjects);
});

router.get("/subjects/:id", async (req, res) => {
  const subjectId = req.params.id;
  const subjects = await readJsonFile("./json/subjects.json");

  const subject = subjects.find(
    (subject) => subject.id === parseInt(subjectId),
  );

  if (subject) {
    res.json(subject);
  } else {
    res.status(404).json({ error: 404, message: "Subject not found" });
  }
});

export { router as apiRouter };

async function readJsonFile(path) {
  try {
    const data = await fs.readFile(path, "utf-8");
    return JSON.parse(data);
  } catch (err) {
    console.error(err);
  }
}
