import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
    {
        Name: {
            required: true,
            type: String
        },
        FatherName: {
            required: true,
            type: String
        },
        FatherName: {
            required: true,
            type: String
        },


    },
    {
        timestamps:true
    }
)


const studentModel = new mongoose.model("student", studentSchema);

export default studentModel;