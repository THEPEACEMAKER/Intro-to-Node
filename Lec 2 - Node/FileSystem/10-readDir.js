// var fs = require("fs");

// console.log("Going to read directory /tmp");
// fs.readdir("/tmp/", function (err, files) {
//   if (err) {
//     return console.error(err);
//   }
//   files.forEach(function (file) {
//     console.log(file);
//   });
// });

var fs = require("fs");

var currentDirectory = __dirname;

console.log("Going to read directory", currentDirectory);
fs.readdir(currentDirectory, function (err, files) {
  if (err) {
    return console.error(err);
  }
  files.forEach(function (file) {
    console.log(file);
  });
});
