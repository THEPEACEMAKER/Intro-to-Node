// Import the database module
const database = require("./database");

let EmailModel = require("./models/email");

let msg = new EmailModel({
  email: "ada.lovelace@gmail.com",
});

msg
  .save()
  .then((doc) => {
    console.log(doc);
  })
  .catch((err) => {
    console.error(err);
  });
