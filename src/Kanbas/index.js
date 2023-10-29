import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import "./index.css";
import Courses from "./Courses";

function Kanbas() {
    return (
        <div className="row">
            <KanbasNavigation/>
            <div className="col">
                <Routes>
                    <Route path="/" element={<Navigate to="Dashboard" />} />
                    <Route path="Account" element={<h1>Account</h1>} />
                    <Route path="Dashboard" element={<Dashboard/>} />
                    <Route path="Courses" element={<Dashboard/>}/>
                    <Route path="Courses/:courseId/*" element={<Courses/>} />/>
                </Routes>

            </div>
        </div>
    );
}
export default Kanbas;