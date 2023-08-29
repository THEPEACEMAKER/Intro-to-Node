var fs = require("fs");

console.log("Going to append data to the existing file");
fs.appendFile("input.txt", " Appended data!", function (err) {
  if (err) {
    return console.error(err);
  }

  console.log("Data appended successfully!");
  console.log("Let's read the updated data");

  fs.readFile("input.txt", function (err, data) {
    if (err) {
      return console.error(err);
    }
    console.log("Asynchronous read: " + data.toString());
  });
});
