console.log("User 1 Request");
setTimeout(callBack, 5000);
//console.log("Database operation takes 5 sec");
////console.log("Data delivered to User");

console.log("User 2 Request");
setTimeout(callBack, 5000);
//console.log("Data delivered to User");

console.log("User 3 Request");
setTimeout(callBack, 5000);
//console.log("Data delivered to User");

function callBack() {
  console.log("Queried the Database and Delivered the data in 5 sec");
}
