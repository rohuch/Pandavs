// import mongoose from 'mongoose';
const mongoose = require('mongoose');

const connectDB = async (DATABASE_URL) => {
  try {
    const DB_OPTIONS = {
      dbName: "HamroGarden"
    }
    mongoose.connect(DATABASE_URL, DB_OPTIONS)
    console.log('connected successfully')
  } catch (error) {
    console.log(error)
  }
}

module.exports = connectDB;