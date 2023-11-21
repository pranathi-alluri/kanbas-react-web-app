import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import "./index.css"
import {AiFillCheckCircle, AiOutlinePlus} from "react-icons/ai";
import {FaEllipsisVertical} from "react-icons/fa6";
import {BsGripVertical} from "react-icons/bs";
import {BiEdit} from "react-icons/bi";


function Assignments() {
    const { courseId } = useParams();
    const assignments = db.assignments;
    const plus = <AiOutlinePlus className="fa"/>;
    const ellip = <FaEllipsisVertical className="fa"/>;
    const grid = <BsGripVertical className="fa"/>;
    const check = <AiFillCheckCircle className="check"/>;
    const edit = <BiEdit className="edit"/>
    const assignmentId = "New assignment"
    const courseAssignments = assignments.filter(
        (assignment) => assignment.course === courseId);
    return (
        <div className="assignment-content">
                <div className="row wd-assignment-buttons">
                    <input
                        className="assignment-search form-control w-25"
                        title="Type the name of the student to search for"
                        placeholder="Search for Assignment"
                    />
                    <div className="col d-inline-flex justify-content-end">
                        <button className="btn btn-light standard-bttn" type="button">
                            {plus}
                            Group
                        </button>
                        <Link
                            to={`/Kanbas/Courses/${courseId}/Assignments/${assignmentId}`}
                            className="btn btn-danger">
                            {plus}
                             Assignment
                        </Link>
                        <button className="btn btn-light standard-bttn" type="button">
                            {ellip}
                        </button>
                    </div>
                </div>
            <div className="row wd-assignment-modules">
                <div className="col">
                    <div className="list-group">
                        <a href="#"
                           className="list-group-item list-group-item-secondary assignment-title d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center">
                                {grid}
                                Assignments
                            </div>

                            <div className="d-inline-flex align-items-center">
                                <div className="rounded-corners">
                                    40% of Total
                                </div>
                                {plus}
                                {ellip}
                            </div>
                        </a>
                            {courseAssignments.map((assignment) => (
                                <Link
                                    key={assignment._id}
                                    to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                                    className="list-group-item list-group-item-action assignment-content">
                                    <div
                                        className="d-flex justify-content-between align-items-center">
                                        <div className="d-flex align-items-center">
                                            <div className="assignment-icons">
                                                {grid}
                                                {edit}
                                            </div>

                                            <div className="assignment-text">
                                                <p className="wd-assignment-header"> {assignment.title}</p>
                                                <p className="wd-assignment-extra"> Week 0 - SETUP -
                                                    Week
                                                    starting on Monday September 5th |</p>
                                                <p className="wd-assignment-extra"> Due Sep 18, 2022
                                                    at
                                                    11:59pm | 100pts</p>
                                            </div>
                                        </div>

                                        <div className="d-flex align-items-center">
                                            {check}
                                            {ellip}
                                        </div>
                                    </div>
                                </Link>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Assignments;