import db from "../../Kanbas/Database";
import {Navigate, Route, Routes, useLocation, useParams} from "react-router-dom";
import {FaBars} from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import { useState, useEffect } from "react";
import axios from "axios";
const API_BASE = process.env.REACT_APP_API_BASE;

function Courses() {
    const {courseId} = useParams();
    const {pathname} = useLocation();
    const URL = `${API_BASE}/courses`
    const [course, setCourse] = useState({});
    const findCourseById = async (courseId) => {
        const response = await axios.get(
            `${URL}/${courseId}`
        );
        setCourse(response.data);
    };
    useEffect(() => {
        findCourseById(courseId);
    }, [courseId]);

    const [empty, kanbas, cour, id, screen, assignment_id] = pathname.split("/")
    const assignment = db.assignments.find((assignment) => assignment._id === assignment_id)
    const bars = <FaBars className={`bars`}/>
    return (
        <div>
            <div className="col">
                <header className="course-home-header">
                    <nav style={{ "--bs-breadcrumb-divider": "'>'" }} aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            {bars}
                            <li className="breadcrumb-item">{course.name}</li>
                            {assignment_id ?
                             (
                                 <>
                                     <li className="breadcrumb-item">{screen}</li>
                                     <li className="breadcrumb-item active" aria-current="page">{assignment.title}</li>
                                 </>)
                                :
                                <li className="breadcrumb-item active" aria-current="page">{screen}</li>
                            }
                        </ol>
                    </nav>
                </header>
            </div>
            <div className="row">
                <CourseNavigation/>
                <div className="col course-content">
                    <Routes>
                        <Route path="/" element={<Navigate to="Home" />} />
                        <Route path="Home" element={<Home/>} />
                        <Route path="Modules" element={<Modules/>} />
                        <Route path="Assignments" element={<Assignments/>} />
                        <Route
                            path="Assignments/:assignmentId"
                            element={<AssignmentEditor/>}
                        />
                        <Route path="Grades" element={<Grades/>} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default Courses;