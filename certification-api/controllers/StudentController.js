import Student from "../models/student.js";



class StudentController {

    static async getStudents(req, res) {
        const students = await Student.find();
        return res.send(students)
    }

    static async addStudent(req,res){
        try { 
            const student = new Student(req.body);
            await student.save();
            res.status(201).send(student);
        }catch(error) {
            res.status(400).send(error);
        }
    }


}

export default StudentController