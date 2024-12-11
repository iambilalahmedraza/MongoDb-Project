import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  reg: String,
  name: String,
  email: String,
  branch: String,
});

const Users = mongoose.model("User12", userSchema);
export default Users;
