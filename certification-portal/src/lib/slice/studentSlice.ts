import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define TypeScript types
interface Student {
  id: number;
  name: string;
  fatherName: string;
  currentEducation: string;
  dob: string;
  address: string;
  batch: string;

}

interface StudentState {
  students: Student[];
}

const initialState: StudentState = {
  students: [],
};

export const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    addStudents: (state, action: PayloadAction<Student[]>) => {
      state.students = action.payload;
    },
  },
});

// Export action creators
export const { addStudents } = studentSlice.actions;

// Export reducer
export default studentSlice.reducer;
