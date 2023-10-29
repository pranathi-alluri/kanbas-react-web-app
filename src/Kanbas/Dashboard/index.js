import {Link} from "react-router-dom";
import db from "../Database";
import "./index.css";
import {LuClipboardEdit} from "react-icons/lu";

function Dashboard() {
    const courses = db.courses;
    const colors = ['db', 'cadet-blue', 'medium-blue']
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
            <div className="container course-grid">
                <div className= "row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
                        {courses.map((course, index) => (
                            <div className="col mb-4">
                            <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="card-link">
                                <div className="card wd-dash-course">
                                    <img className={`card-img-top wd-bg-color-${colors[index]}`}/>
                                    <div className="card-body">
                                        <p className={`wd-fg-color-${colors[index]} card-title course-title`}>{course.name}</p>
                                        <p className="card-text course-term">{course.number}</p>
                                        <p className="course-year">{course.startDate}</p>
                                        {clipIcon}
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
