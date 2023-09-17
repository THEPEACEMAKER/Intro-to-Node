// Import the database module
const database = require("./database");

let UserModel = require("./models/user");

let model = new UserModel();
model.fullName = "Thomas Anderson";
console.log(model.toJSON()); // Output model fields as JSON
console.log();
console.log(model.fullName); // Output the full name

let initials = model.getInitials();
console.log(initials); // This will output: TA

UserModel.getUsers()
  .then((docs) => {
    console.log(docs);
  })
  .catch((err) => {
    console.error(err);
  });

model
  .save()
  .then((doc) => {
    console.log(doc);
  })
  .catch((err) => {
    console.error(err);
  });

// Query Building
// UserModel.find() // find all users
//   // .skip(100) // skip the first 100 items
//   .limit(10) // limit to 10 items
//   .sort({ firstName: 1 }) // sort ascending by firstName
//   .select({ firstName: true }) // select firstName only
//   .exec() // execute the query
//   .then((docs) => {
//     console.log(docs);
//   })
//   .catch((err) => {
//     console.error(err);
//   });
