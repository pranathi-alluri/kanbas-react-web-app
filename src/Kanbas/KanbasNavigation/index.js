import { Link, useLocation } from "react-router-dom";
import "./index.css";
import {PiMonitorPlay, PiUserCircleFill} from "react-icons/pi";
import {TfiDashboard} from "react-icons/tfi";
import {BiBook} from "react-icons/bi";
import {FaRegCalendarAlt} from "react-icons/fa";
import {FiHelpCircle, FiInbox} from "react-icons/fi";
import {AiOutlineClockCircle} from "react-icons/ai";
import {LiaSignOutAltSolid} from "react-icons/lia";
import neuLogo from "../../images/neuLogo.png"

function KanbasNavigation() {
    const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];
    const linkToIconMap = {
        Account: <PiUserCircleFill className="account-icon"/>,
        Dashboard: <TfiDashboard className="icon"/> ,
        Courses: <BiBook className="icon"/>,
        Calendar: <FaRegCalendarAlt className="icon"/> ,
        Inbox: <FiInbox className="icon"/>,
        History: <AiOutlineClockCircle className="icon"/>,
        Studio: <PiMonitorPlay className="icon"/>,
        Commons: <LiaSignOutAltSolid className="icon"/> ,
        Help: <FiHelpCircle className="icon"/>
    }
    const { pathname } = useLocation();
    return (
        <div className="navigation-col">
            <div className = "logo">
                <img src={neuLogo} width="65px"/>
            </div>

            <div className="list-group wd-kanbas-navigation">
                {links.map((link, index) => (
                    <Link
                        key={index}
                        to={`/Kanbas/${link}`}
                        className={`list-group-item ${pathname.includes(link) && "active"}`}>
                        {linkToIconMap [link]} <br/>
                        {link}
                    </Link>
                ))}
            </div>
        </div>

    );
}
    export default KanbasNavigation;