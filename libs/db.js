import mongoose from "mongoose";
// MONGODB_URI=mongodb://localhost:27017/tushifa_db

const url = process.env?.MONGODB_URI;
let connection;

const startDbConnection = async () => {
  if (!connection) {
    connection = await mongoose.connect(url);
    console.log("Connect to Database");
  }
  return connection;
};

export default startDbConnection;
