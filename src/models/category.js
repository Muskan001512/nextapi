// Category.js
import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {type: String},
    image: {type:String},
    user: {type: String}
  // Add other fields as needed
});

const Category = mongoose.model('Category', categorySchema);

export default Category;
