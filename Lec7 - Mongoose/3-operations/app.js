// Import the database module
const database = require("./database");

let EmailModel = require("./models/email");

// Create Record
let msg = new EmailModel({
  email: "ADA.LOVELACE@GMAIL.COM",
});
msg
  .save()
  .then((doc) => {
    console.log(doc);
  })
  .catch((err) => {
    console.error(err);
  });

// fetch Record
// EmailModel.find({
//   email: "ada.lovelace@gmail.com", // search query
// })
//   .then((doc) => {
//     console.log(doc);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// update Record
// EmailModel.findOneAndUpdate(
//   {
//     email: "ada.lovelace@gmail.com", // search query
//   },
//   {
//     email: "theoutlander@live.com", // field:values to update
//   },
//   {
//     new: true, // return updated doc
//     runValidators: true, // validate before update
//   }
// )
//   .then((doc) => {
//     console.log(doc);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// Delete Record
// EmailModel.findOneAndRemove({
//   email: "theoutlander@live.com",
// })
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((err) => {
//     console.error(err);
//   });
