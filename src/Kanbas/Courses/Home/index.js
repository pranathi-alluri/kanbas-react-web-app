import Modules from "../Modules";
import {
    FaBan,
    FaBullseye,
    FaCheckCircle,
    FaCog,
    FaFileImport,
    FaRegCalendarAlt
} from "react-icons/fa";
import {BiSolidBarChartAlt2} from "react-icons/bi";
import {GrAnnounce} from "react-icons/gr";
import {AiOutlineBell} from "react-icons/ai";
import "./index.css"

function Home() {
    const ban = <FaBan classname="icons"/>
    const check = <FaCheckCircle classname="icons"/>
    const importIcon = <FaFileImport classname="icons"/>
    const cog = <FaCog classname="icons"/>
    const bull = <FaBullseye classname="icons"/>
    const graph = <BiSolidBarChartAlt2 classname="icons"/>
    const notif = <GrAnnounce classname="icons"/>
    const bell = <AiOutlineBell classname="icons"/>
    const cal = <FaRegCalendarAlt classname="cal-styles"/>
    return (
        <div className="row">
            <div className="col">
                <Modules/>
            </div>
            <div className="col-lg-2 d-none d-lg-block sidebar-content">
                <div className="sidebar-beginning">
                    Course Status
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-light side-std-button">
                            {ban}
                            Unpublish
                        </button>
                        <button type="button" className="btn btn-light side-std-button"
                                style={{ backgroundColor: 'darkseagreen', color: 'white' }}>
                            {check}
                            Published
                        </button>
                    </div>
                </div>

                <div className="list-group sidebar-nav">
                    <a className="list-group-item side-std-button" href="#">
                        {importIcon} Import Existing Content</a>
                    <a className="list-group-item side-std-button" href="#">
                        {cog} Import From Commons</a>
                    <a className="list-group-item side-std-button" href="#">
                        {bull} Choose Home Page</a>
                    <a className="list-group-item side-std-button" href="#">
                        {graph} View Course Stream </a>
                    <a className="list-group-item side-std-button" href="#">
                        {notif} New Announcement</a>
                    <a className="list-group-item side-std-button" href="#">
                        {graph} New Analytics</a>
                    <a className="list-group-item side-std-button" href="#">
                        {bell} View Course Notifications</a>
                </div>

                <div className="list-group comping-up">
                    <a className="list-group-item side-coming-up "
                       style={{borderBottom: 'gray solid 2px'}} href="#">
                        Coming up
                    </a>
                    <a className="list-group-item side-cal-dates" href="#">
                        <div className="meeting-name">
                            {cal} Lecture
                        </div>
                    </a>
                    <a className="list-group-item side-cal-dates" href="#">
                        <div className="meeting-name">
                            {cal} CS5610 06 SP23 Lecture
                        </div>
                    </a>
                    <a className="list-group-item side-cal-dates" href="#">
                        <div className="meeting-name">
                            {cal} CS5610 Web Development
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}
export default Home;