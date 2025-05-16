// import mongoose from 'mongoose';
// import { MongoClient, ServerApiVersion } from "mongodb";

// const dbConnection = async () => {
//   // const Mongo_DB_URL=`mongodb+srv://user:password%40123@file-sharing.yxgcnmp.mongodb.net/?retryWrites=true&w=majority&appName=file-sharing`;
//   const Mongo_DB_URL = `mongodb+srv://user:userpass@upload.hfxz8bz.mongodb.net/?retryWrites=true&w=majority&appName=upload`;

//   try {
//     const client = new MongoClient(Mongo_DB_URL, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     await client.connect();
//     console.log("database connected successfully");
//   } catch (error) {
//     console.log("error while connecting with the database", error.message);
//   }
// };

// export default dbConnection;

import mongoose from 'mongoose';

const dbConnection = async () => {
  const Mongo_DB_URL = `mongodb+srv://user:userpass@upload.hfxz8bz.mongodb.net/?retryWrites=true&w=majority&appName=upload`;

  try {
    await mongoose.connect(Mongo_DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully with Mongoose");
  } catch (error) {
    console.error("Error while connecting to database:", error.message);
  }
};

export default dbConnection;
