import { readFile, readFileSync } from "fs";

readFile("input.txt", (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`***Asynchorunus read file ${data.toString()} **`);
  }
});

let data = readFileSync("input.txt");
console.log(`Synchornous function .... ${data.toString()} ......`);
