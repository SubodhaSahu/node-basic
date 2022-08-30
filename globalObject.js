console.log(__filename);
console.log(__dirname);

function printStuff() {
  console.log("This is from setTimout");
}
setTimeout(printStuff, 5000); //Time in milisecond

setInterval(printStuff, 2000);
