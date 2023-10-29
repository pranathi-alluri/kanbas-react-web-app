import React from "react";
import {useParams} from "react-router-dom";
import db from "../../Database";
import {BsGripVertical} from "react-icons/bs";
import {AiFillCheckCircle, AiOutlinePlus} from "react-icons/ai";
import {HiEllipsisVertical} from "react-icons/hi2";
import "./index.css";

function ModuleList() {
    const {courseId} = useParams();
    const modules = db.modules;
    const grid = <BsGripVertical className="fa"/>
    const check = <AiFillCheckCircle className="check-circle"/>
    const plus = <AiOutlinePlus className="fa"/>
    const line = <HiEllipsisVertical className="fa"/>
    return (
        <div>
            {
                modules
                    .filter((module) => module.course === courseId)
                    .map((module, index) => (
                        <div className="row wd-modules">
                            <div className={`col`}>
                                <div className={`list-group`}>
                                    <a href="#"
                                       className="list-group-item list-group-item-secondary module-title">
                                        {grid}
                                        {module.name}
                                        <div className="d-inline-flex float-end p-1">
                                            {check}
                                            {plus}
                                            {line}
                                        </div>
                                    </a>
                                    <a href="#"
                                       className="list-group-item list-group-item-action module-content">
                                        {grid}
                                        DESCRIPTION
                                        <div className="d-inline-flex float-end">
                                            {check}
                                            {line}
                                        </div>
                                    </a>
                                    <a href="#"
                                       className="list-group-item list-group-item-action module-content">
                                        {grid}
                                        {module.description}
                                        <div className="d-inline-flex float-end">
                                            {check}
                                            {line}
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))
            }
        </div>
    );
}

export default ModuleList;