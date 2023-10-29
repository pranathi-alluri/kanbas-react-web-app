import {useState} from "react";
import {Link} from "react-router-dom";
import db from "../Database";
import "./index.css";
import {LuClipboardEdit} from "react-icons/lu";

function Dashboard({courses,
                       course,
                       setCourse,
                       addNewCourse,
                       deleteCourse,
                       updateCourse}) {

    const colors = ['db', 'blue', 'cadet-blue', 'medium-blue', 'light-blue', 'gray', 'cream']
    const clipIcon = <LuClipboardEdit className={`wd-fg-color-dg`}/>
    return (
        <div>
            <header className="dash-head">
                Dashboard
                <hr/>
            </header>
            <div className="dash-sub">
                Published Courses ({courses.length})
            </div>
            <div className="dash-edit-form">
                <div className="edit-title">
                    Edit Courses:
                </div>
                <input value={course.name} className="form-control"
                       onChange={(e) => setCourse({...course, name: e.target.value})}/>
                <input value={course.number} className="form-control"
                       onChange={(e) => setCourse({...course, number: e.target.value})}/>
                <input value={course.startDate} className="form-control" type="date"
                       onChange={(e) => setCourse({...course, startDate: e.target.value})}/>
                <input value={course.endDate} className="form-control" type="date"
                       onChange={(e) => setCourse({...course, endDate: e.target.value})}/>
                <div className="btn-two">
                    <button className="btn btn-light add-btn" onClick={addNewCourse}>
                        Add
                    </button>
                    <button className="btn btn-light update-btn" onClick={updateCourse}>
                        Update
                    </button>
                </div>
            </div>

            <div className="container course-grid">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
                    {courses.map((course, index) => (
                        <div className="col mb-4">
                            <Link key={course._id} to={`/Kanbas/Courses/${course._id}`}
                                  className="card-link">
                                <div className="card wd-dash-course">
                                    <img className={`card-img-top wd-bg-color-${colors[index]}`}/>
                                    <div className="card-body">
                                        <p className={`wd-fg-color-${colors[index]} card-title course-title`}>{course.name}</p>
                                        <p className="card-text course-term">{course.number}</p>
                                        <p className="course-year">{course.startDate}</p>
                                        {clipIcon}
                                        <div className="btn-two">
                                            <button className="btn btn-light edit-btn"
                                                    onClick={(event) => {
                                                        event.preventDefault();
                                                        setCourse(course);
                                                    }}>
                                                Edit
                                            </button>

                                            <button className="btn btn-light delete-btn"
                                                    onClick={(event) => {
                                                        event.preventDefault();
                                                        deleteCourse(course._id);
                                                    }}>
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
