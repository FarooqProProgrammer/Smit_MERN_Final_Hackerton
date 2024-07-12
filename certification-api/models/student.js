import mongoose from "mongoose";
const Schema = mongoose.Schema;

const studentSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  age: {
    type: Number,
    required: true
  },
  batches: [{
    type: Schema.Types.ObjectId,
    ref: 'Batch'
  }]
});

const Student = mongoose.model('Student', studentSchema);

export default Student;
