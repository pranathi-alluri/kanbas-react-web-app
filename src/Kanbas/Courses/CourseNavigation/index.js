import { Link, useParams, useLocation } from "react-router-dom";
import "./index.css"


function CourseNavigation() {
    const links = ["Home", "Modules", "Piazza","Zoom Meetings","Assignments", "Quizzes","Grades",
    "People", "Panopto Video", "Discussions", "Announcements", "Pages", "Files", "Rubrics", "Outcomes",
    "Collaborations", "Syllabus", "Settings"];
    const { courseId } = useParams();
    const { pathname } = useLocation();


    return (
        <div className="col-md d-none d-md-block course-nav-col">
            <div className="list-group wd-course-nav">
                <p className="course-info"> {courseId} </p>
                {links.map((link, index) => (
                    <Link
                        key={index}
                        to={`/Kanbas/Courses/${courseId}/${link}`}
                        className={`list-group-item ${pathname.includes(link) && "active"}`}>
                        {link}
                    </Link>
                ))}
            </div>
        </div>
    );
}


export default CourseNavigation;