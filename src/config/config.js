import dotenv from 'dotenv';
dotenv.config();






import mongoose from 'mongoose';

const dbURI = process.env.DatabaseURL

const connectToMongo = async () => {
  try {
    await mongoose.connect(dbURI);
    console.log('Connected to MongoDB');


  } catch (error) {
    console.error('Error connecting to MongoDB', error);
    process.exit(1);
  }
};

export default connectToMongo;
