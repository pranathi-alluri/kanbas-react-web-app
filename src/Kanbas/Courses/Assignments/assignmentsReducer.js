import { createSlice } from "@reduxjs/toolkit";
import db from "../../Database";


const initialState = {
    assignments: db.assignments,
    assignment: { name: "New Assignment", description: "New Assignment Description",
    dueDate: "2023-11-02", availableFromDate: "2023-10-25", availableUntilDate: "2023-11-03"},
};


const assignmentsSlice = createSlice({
                                     name: "assignments",
                                     initialState,
                                     reducers: {
                                         addAssignment: (state, action) => {
                                             state.assignments = [
                                                 { ...action.payload, _id: new Date().getTime().toString() },
                                                 ...state.assignments,
                                             ];
                                         },
                                         deleteAssignments: (state, action) => {
                                             state.assignments = state.assignments.filter(
                                                 (assignment) => assignment._id !== action.payload
                                             );
                                         },
                                         updateAssignment: (state, action) => {
                                             state.assignments = state.assignments.map((assignment) => {
                                                 if (assignment._id === action.payload._id) {
                                                     return action.payload
                                                 } else {
                                                     return assignment;
                                                 }
                                             });
                                         },
                                         selectAssignment: (state, action) => {
                                             state.assignment = action.payload;
                                         },
                                     },
                                 });


export const { addAssignment, deleteAssignment,
    updateAssignment, selectAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;

