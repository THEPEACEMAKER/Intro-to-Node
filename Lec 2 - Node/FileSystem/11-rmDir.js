// var fs = require("fs");

// console.log("Going to delete directory /tmp/test");
// fs.rmdir("/tmp/test", function (err) {
//   if (err) {
//     return console.error(err);
//   }
//   console.log("Going to read directory /tmp");

//   fs.readdir("/tmp/", function (err, files) {
//     if (err) {
//       return console.error(err);
//     }
//     files.forEach(function (file) {
//       console.log(file);
//     });
//   });
// });

var fs = require("fs");
var path = require("path");

var directoryToRemove = path.join(__dirname, "test");

console.log("Going to delete directory", directoryToRemove);
fs.rmdir(directoryToRemove, function (err) {
  if (err) {
    return console.error(err);
  }
  console.log("Going to read directory", __dirname);

  fs.readdir(__dirname, function (err, files) {
    if (err) {
      return console.error(err);
    }
    files.forEach(function (file) {
      console.log(file);
    });
  });
});
