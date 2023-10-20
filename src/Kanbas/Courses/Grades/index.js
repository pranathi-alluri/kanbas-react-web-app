import db from "../../Database";
import {useParams} from "react-router-dom";
import "./index.css"
import {FaCog, FaFileExport, FaFileImport} from "react-icons/fa";
import {FiFilter} from "react-icons/fi";

function Grades() {
    const {courseId} = useParams();
    const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
    const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);
    const importIcon = <FaFileImport/>
    const exportIcon = <FaFileExport/>
    const cog = <FaCog/>
    const filter = <FiFilter/>
    return (
        <div>
            <div className="row wd-grade-buttons">
                <div className="col d-inline-flex justify-content-end">
                    <button className="btn btn-light standard-bttn" type="button">
                        {importIcon} Import
                    </button>
                    <div className="dropdown">
                        <button className="btn btn-light dropdown-toggle standard-bttn"
                                type="button" data-bs-toggle="dropdown" aria-expanded="false"
                                data-target="#myDropdown">
                            {exportIcon} Export
                        </button>
                        <ul className="dropdown-menu" id="myDropdown">
                            <li><a className="dropdown-item" href="#">Export All</a></li>
                        </ul>
                    </div>
                    <button className="btn btn-light standard-bttn" type="button">
                        {cog}
                    </button>
                </div>
            </div>

            <div className="row wd-grade-modules">
                <div className="col">
                    <div className="row mb-3">
                        <div className="col">
                            <label className="form-label" style={{fontWeight: "bold"}}
                                   htmlFor="studentName">
                                Student Names
                            </label>
                        </div>
                        <div className="col">
                            <label className="form-label" style={{fontWeight: "bold"}}
                                   htmlFor="assignmentName">
                                Assignment Names
                            </label>
                        </div>
                    </div>

                    <div className="row mb-3">
                        <div className="col">
                            <input title="Type the name of the student to search for"
                                   placeholder="Search Students" className="form-control"
                                   id="studentName"/>

                        </div>
                        <div className="col">
                            <input title="Type the name of the assignment to search for"
                                   placeholder="Search Assignments" className="form-control"
                                   id="assignmentName"/>
                        </div>
                    </div>

                    <button className="btn btn-light standard-bttn" type="button">
                        {filter} Apply Filters
                    </button>

                <div className="container mt-4">
                    <div className="table-responsive">
                        <table className="table table-striped">
                            <thead>
                            <tr>
                                <th>Student Name</th>
                                {assignments.map((assignment) => (<th className="text-center">{assignment.title}</th>))}
                            </tr>
                            </thead>
                            <tbody>
                            {enrollments.map((enrollment) => {
                                const user = db.users.find((user) => user._id === enrollment.user);
                                return (
                                    <tr>
                                        <td className="text-red">{user.firstName} {user.lastName}</td>
                                        {assignments.map((assignment) => {
                                            const grade = db.grades.find(
                                                (grade) => grade.student === enrollment.user
                                                           && grade.assignment === assignment._id);
                                            return (<td className="text-center">{grade?.grade || <input
                                                className="form-control" type="number" max="100"
                                                min="0"/>}</td>);
                                        })}
                                    </tr>);
                            })}
                            </tbody>
                        </table>
                    </div>
                </div>
                </div>
            </div>
        </div>);
}

export default Grades;
