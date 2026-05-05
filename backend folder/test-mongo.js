const mongoose = require('mongoose');

const uri = 'mongodb://localhost:27017/coinbase_clone';

mongoose.connect(uri)
  .then(() => {
    console.log('Successfully connected to MongoDB without SRV!');
    process.exit(0);
  })
  .catch(err => {
    console.error('Connection failed:', err.message);
    process.exit(1);
  });
