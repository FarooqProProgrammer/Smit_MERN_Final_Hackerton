import mongoose from "mongoose";
const Schema = mongoose.Schema;

const batchSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  startDate: {
    type: String,
    required: true
  },
  endDate: {
    type: String,
    required: true
  },
  course: {
    type: Schema.Types.ObjectId,
    ref: 'Course',
    required: true
  }
});

const Batch = mongoose.model('Batch', batchSchema);

export default Batch;
