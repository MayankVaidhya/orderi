import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect("mongodb+srv://foode:foode@cluster0.v1lupzy.mongodb.net/foode")
    .then(() => console.log("Database is connected sucessfully!"));
};
