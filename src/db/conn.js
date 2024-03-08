import mongoose from 'mongoose';

const MONGODB_URI = 'mongodb+srv://express:WoIFBg5HgwIMj3KC@cluster0.zohe4sq.mongodb.net/?retryWrites=true&w=majority/newone';

const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true, // Deprecated, but still included for backward compatibility
      useUnifiedTopology: true,
    });

    console.log('Connection successful');
  } catch (error) {
    console.error('Connection failed:', error);
  }
};

export default connectDB;
