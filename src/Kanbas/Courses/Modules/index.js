import ModuleList from "./ModuleList";
import "./index.css"
import {AiOutlineCheckCircle, AiOutlinePlus} from "react-icons/ai";
import {HiEllipsisVertical} from "react-icons/hi2";
import React from "react";
function Modules() {
    const check = <AiOutlineCheckCircle style={{color:'green'}}/>
    const plus = <AiOutlinePlus/>
    const line = <HiEllipsisVertical/>
    return (
        <div >
            <div className="row wd-home-buttons">
                <div className="col d-inline-flex justify-content-end">
                    <button className="btn btn-light standard-bttn" type="button">Collapse All
                    </button>
                    <button className="btn btn-light standard-bttn" type="button">View Progress
                    </button>
                    <div className="dropdown">
                        <button className="btn btn-light dropdown-toggle standard-bttn"
                                type="button" data-bs-toggle="dropdown" aria-expanded="false"
                                data-target="#myDropdown">
                            {check}
                            Publish All
                        </button>
                        <ul className="dropdown-menu" id="myDropdown">
                            <li><a className="dropdown-item" href="#">Publish All</a></li>
                            <li><a className="dropdown-item" href="#">Unpublish</a></li>
                        </ul>
                    </div>
                    <button className="btn btn-danger" type="button">
                        {plus}
                        Module
                    </button>
                    <button className="btn btn-light standard-bttn" type="button">
                        {line}
                    </button>
                </div>
            </div>
            <ModuleList />
        </div>
    );
}
export default Modules;