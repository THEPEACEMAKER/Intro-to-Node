// var fs = require("fs");

// console.log("Going to create directory /tmp/test");
// fs.mkdir("/tmp/test", function (err) {
//   if (err) {
//     return console.error(err);
//   }
//   console.log("Directory created successfully!");
// });

var fs = require("fs");
var path = require("path");

var directoryPath = path.join(__dirname, "test");

console.log("Going to create directory", directoryPath);
fs.mkdir(directoryPath, function (err) {
  if (err) {
    return console.error(err);
  }
  console.log("Directory created successfully!");
});
