import mongoose from "mongoose";
import passport from "passport";
import passportLocalMongoose from "passport-local-mongoose";

const UserSchema = new mongoose.Schema({
  email: String,
  password: String,
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.models.User || mongoose.model("User", UserSchema);
