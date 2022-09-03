const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    console.log("DB server connected");
    const conn = await mongoose.connect(`mongodb+srv://ade:KOAgLkc9Tv07NlfE@cluster0.5nbpw.mongodb.net/natour?retryWrites=true&w=majority`);
    console.log(`MongoDB connected to ${conn.connection.host}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectDB