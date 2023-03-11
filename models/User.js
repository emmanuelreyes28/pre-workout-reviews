import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});

// module.exports = mongoose.models.User || mongoose.model("User", userSchema);
export default mongoose.models.User || mongoose.model("User", userSchema);
