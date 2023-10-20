import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";
import {FaEllipsisVertical} from "react-icons/fa6";
import "../index.css"


function AssignmentEditor() {
    const { assignmentId } = useParams();
    const assignment = db.assignments.find(
        (assignment) => assignment._id === assignmentId);


    const { courseId } = useParams();
    const navigate = useNavigate();
    const ellip = <FaEllipsisVertical className="fa"/>;
    const handleSave = () => {
        console.log("Actually saving assignment TBD in later assignments");
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };
    return (
        <div class="col assignment-content">
            <div class="row wd-assignment-buttons">
                <div class="col d-inline-flex justify-content-end">
                    <button class="btn btn-light standard-bttn" type="button">
                        {ellip}
                    </button>
                </div>
            </div>

            <div class="row wd-assignment-modules">
                <div class="col">
                    <div class="mb-3">
                        <label for="assignmentName" class="form-label">Assignment Name</label>
                        <input class="form-control" value={assignment.title} id="assignmentName" placeholder="Assignment Name" title="Name of Assignment"/>
                    </div>

                    <div class="mb-3">
                        <textarea class="form-control" id="assignmentDescription" rows="5" placeholder="Assignment Description..." title="Write Assignment Description here"> This is the first assignment to build Kanbas.</textarea>
                    </div>

                    <div class="row">
                        <div class="col-2">
                            <label for="assignmentPoints" class="form-label">Points</label>
                        </div>
                        <div class="col">
                            <input class="form-control" id="assignmentPoints" placeholder="Point value" title="Point value of Assignment" value="100" type="number" max="100" min="0"/>
                        </div>
                    </div>

                    <div class="row ">
                        <div class="col-2">
                            <label for="assignmentGroup" class="form-label">Assignment Group</label>
                        </div>
                        <div class="col">
                            <select class="form-select" id="assignmentGroup">
                                <option selected>ASSIGNMENTS</option>
                                <option>QUIZZES</option>
                                <option>EXAMS</option>
                                <option>Project</option>
                            </select>
                        </div>
                    </div>

                    <div class="row ">
                        <div class="col-2">
                            <label for="gradeType" class="form-label">Display Grade as</label>
                        </div>
                        <div class="col">
                            <div class="mb-3">
                                <select class="form-select" id="gradeType">
                                    <option selected>Percentage</option>
                                    <option>Points</option>
                                    <option>Decimal</option>
                                    <option>Number</option>
                                </select>
                            </div>
                            <input class="form-check-input"
                                   type="checkbox" id="gradecheck"/>
                            <label class="form-check-label" for="gradecheck">
                                Do not count this assignment toward the final grade</label>
                        </div>
                    </div>

                    <div class="row ">
                        <div class="col-2">
                            <label for="submissionType" class="form-label">Submission Type</label>
                        </div>
                        <div class="col">
                            <div class="card">
                                <div class="card-body">
                                    <div class="mb-3">
                                        <select class="form-select" id="submissionType">
                                            <option selected>Online</option>
                                            <option>None</option>
                                        </select>
                                    </div>

                                    <div class="checkbox-form">
                                        <label class="form-label" style={{fontWeight: 'bold'}}>
                                            Online Entry Options
                                        </label>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox"  id="textEntry" checked/>
                                            <label class="form-check-label" for="textEntry">Text Entry</label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox"  id="websiteURL" checked/>
                                            <label class="form-check-label" for="websiteURL">Website URL</label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox"  id="mediaRecordings" checked/>
                                            <label class="form-check-label" for="mediaRecordings">Media Recordings</label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox"  id="studentAnnotation"/>
                                            <label class="form-check-label" for="studentAnnotation">Student Annotation</label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox"  id="fileUploads" checked/>
                                            <label class="form-check-label" for="fileUploads">File Uploads</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row ">
                        <div class="col-2">
                            <label for="attempts" class="form-label">Submission Attempts</label>
                        </div>
                        <div class="col">
                            <select class="form-select" id="attempts">
                                <option selected>Unlimited</option>
                                <option>One</option>
                            </select>
                        </div>
                    </div>

                    <div class="row ">
                        <div class="col-2">
                            <label for="plagiarism" class="form-label">Plagiarism Review</label>
                        </div>
                        <div class="col">
                            <select class="form-select" id="plagiarism">
                                <option selected>None</option>
                                <option>External</option>
                            </select>
                        </div>
                    </div>

                    <div class="row ">
                        <div class="col-2">
                            <label class="form-label">Assign</label>
                        </div>
                        <div class="col">
                            <div class="card">
                                <div class="card-body">
                                    <div class="mb-3">
                                        <label for="assignmentGroup" class="form-label" style={{fontWeight: 'bold'}}>Assign to</label>
                                        <input class="form-control" placeholder="Everyone" value="Everyone"/>
                                    </div>

                                    <div class="mb-3">
                                        <label for="dueDate" class="form-label" style={{fontWeight: 'bold'}}>Due</label>
                                        <input id="dueDate" class="form-control" type="datetime-local" min="2023-09-06 00:00" max="2023-09-20 23:59" value="2023-09-18 23:59"/>
                                    </div>

                                    <div class="row">
                                        <div class="col">
                                            <label for="available" class="form-label" style={{fontWeight: 'bold'}}>Available From</label>
                                            <input id="available" class="form-control" type="datetime-local" value="2023-09-06 00:00"/>
                                        </div>
                                        <div class="col">
                                            <label for="until" class="form-label" style={{fontWeight: 'bold'}}>Until</label>
                                            <input id="until" class="form-control" type="datetime-local" value="2023-09-20 23:59"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="d-grid gap-2 d-md-block justify-content-end float-end wd-edit-save-bttns">
                        <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
                              className="btn btn-light cancel-bttn">
                            Cancel
                        </Link>
                        <button onClick={handleSave} className="btn btn-danger save-bttn">
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default AssignmentEditor;