import { myFunc } from "./module1.js";
//import module1 from "./module1.js";
myFunc();

//New Syntax

//longjump();

// function printStuff(msg) {
//   console.log(msg);
// }

let printStuff = function (msg) {
  console.log(msg);
};

function mainFunction(anotherFunction, value) {
  anotherFunction(value);
}
//printStuff('Hello)

mainFunction(printStuff, "Hello Js");
