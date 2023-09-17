let mongoose = require("mongoose");
let timestampPlugin = require("./plugins/timestamp");

let userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  // createdAt: Date,
  // updatedAt: Date,
});

// Virtual Property
userSchema.virtual("fullName").get(function () {
  return this.firstName + " " + this.lastName;
});
userSchema.virtual("fullName").set(function (name) {
  let str = name.split(" ");

  this.firstName = str[0];
  this.lastName = str[1];
});

// Instance Methods
userSchema.methods.getInitials = function () {
  return this.firstName[0] + this.lastName[0];
};

// Static Methods
userSchema.statics.getUsers = function () {
  return this.find().exec(); // Use .exec() to return a Promise
};

// // pre save hook
// userSchema.pre("save", function (next) {
//   let now = Date.now();

//   this.updatedAt = now;
//   // Set a value for createdAt only if it is null
//   if (!this.createdAt) {
//     this.createdAt = now;
//   }
//   // Call the next function in the pre-save chain
//   next();
// });

// plugin
userSchema.plugin(timestampPlugin);

module.exports = mongoose.model("User", userSchema);
