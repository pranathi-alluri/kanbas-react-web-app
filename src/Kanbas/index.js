import KanbasNavigation from "./KanbasNavigation";
import {Routes, Route, Navigate} from "react-router-dom";
import Dashboard from "./Dashboard";
import "./index.css";
import Courses from "./Courses";
import {useState, useEffect} from "react";
import {Provider} from "react-redux";
import store from "./store";
import axios from "axios";

function Kanbas() {
    const [courses, setCourses] = useState([])
    const URL = "https://kanbas-node-server-app-xtj8.onrender.com/api/courses";
    const findAllCourses = async () => {
        const response = await axios.get(URL);
        setCourses(response.data);
    };
    useEffect(() => {
        findAllCourses();
    }, []);

    const [course, setCourse] = useState({
                                             name: "New Course", number: "New Number",
                                             startDate: "2023-09-10", endDate: "2023-12-15",
                                         });

    const deleteCourse = async (courseId) => {
        console.log (courseId)
        const response = await axios.delete(
            `${URL}/${courseId}`
        );
        setCourses(courses.filter((c) => c._id !== courseId));
    };

    const addNewCourse = async () => {
        const response = await axios.post(URL, course);
        setCourses([response.data,
                    ...courses,]);
    };
    const updateCourse = async(courseId) => {
        const response = await axios.put(
            `${URL}/${courseId}`,
            course
        );
        setCourses(
            courses.map((c) => {
                if (c._id === courseId) {
                    return course;
                } else {
                    return c;
                }
            })
        );
    };

    return (
        <Provider store={store}>
            <div className="row">
                <KanbasNavigation/>
                <div className="col">
                    <Routes>
                        <Route path="/" element={<Navigate to="Dashboard"/>}/>
                        <Route path="Account" element={<h1>Account</h1>}/>
                        <Route path="Dashboard" element={<Dashboard
                            courses={courses}
                            course={course}
                            setCourse={setCourse}
                            addNewCourse={addNewCourse}
                            deleteCourse={deleteCourse}
                            updateCourse={updateCourse}/>
                        }/>
                        <Route path="Courses" element={<Dashboard
                            courses={courses}
                            course={course}
                            setCourse={setCourse}
                            addNewCourse={addNewCourse}
                            deleteCourse={deleteCourse}
                            updateCourse={updateCourse}/>
                        }/>
                        <Route path="Courses/:courseId/*" element={<Courses courses={courses}/>}/>/>
                    </Routes>
                </div>
            </div>
        </Provider>
    );
}

export default Kanbas;