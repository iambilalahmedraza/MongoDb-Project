import express from "express";
import mongoose from "mongoose";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import Users from "./UserSchema.js";
const app = express();
const Port = 5010;

const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.static(__dirname));
app.use(express.urlencoded({ extended: true }));
mongoose
  .connect("mongodb://localhost:27017/DataForms")
  .then(() => {
    console.log("Connected to DataBase Successfully ");
  })
  .catch((err) => {
    console.log("Error Connecting Database", err);
  });

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});
app.post("/post", async (req, res) => {
  const { reg, name, email, branch } = req.body;
  const user = new Users({
    reg,
    name,
    email,
    branch,
  });
  await user.save();
  console.log(user);
  res.send("Form Submited to DataBase Suucefully");
});
app.listen(Port, () => {
  console.log(`App is Running On Port ${Port}`);
});
