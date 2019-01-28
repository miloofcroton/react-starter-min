import mongoose, { Schema, model, Types } from 'mongoose';

const thingSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
});

export default mongoose.model('Thing', thingSchema);
