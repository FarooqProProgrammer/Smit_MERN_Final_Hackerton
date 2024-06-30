import mongoose from "mongoose";

const batchSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        startDate: {
            type: Date,
            required: true
        },
        endDate: {
            type: Date,
            required: true
        },
        description: {
            type: String
        }
    },
    {
        timestamps: true
    }
);

const Batch = mongoose.model("Batch", batchSchema);

export default Batch;
