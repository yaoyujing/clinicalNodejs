import mongoose from 'mongoose';
import props from './properties'
module.exports = function(){
    mongoose.connect(props.DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB Atlas');
  })
  .catch(error => {
    console.error('Error connecting to MongoDB Atlas:', error);
  });
}