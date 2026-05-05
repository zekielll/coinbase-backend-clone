const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
      throw new Error('MONGODB_URI must be defined in .env');
    }
    // Connect to coinbase_clone database
    const fullUri = uri.includes('coinbase_clone') ? uri : `${uri}/coinbase_clone`;
    await mongoose.connect(fullUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    console.log('Server will continue without database connection for testing purposes');
    // Don't exit process in development - allow server to start for API testing
    if (process.env.NODE_ENV === 'production') {
      process.exit(1);
    }
  }
};

module.exports = connectDB;
