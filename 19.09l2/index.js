const FOLDER_NAME = "folder";
const NUMBER_OF_FILES = 20000;

const fs = require("fs");

fs.mkdirSync(FOLDER_NAME);
for (let i = 0; i < NUMBER_OF_FILES; i++) {
  fs.writeFile(`${FOLDER_NAME}/file${i}.txt`, "test", () => {
    console.log(`created file: file${i}.txt`);
  });
}
