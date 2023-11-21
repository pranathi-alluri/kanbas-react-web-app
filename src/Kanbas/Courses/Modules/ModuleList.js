import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {BsGripVertical} from "react-icons/bs";
import {AiFillCheckCircle, AiOutlinePlus} from "react-icons/ai";
import {HiEllipsisVertical} from "react-icons/hi2";
import "./index.css";
import {useDispatch, useSelector} from "react-redux";
import * as client from "./client";
import {addModule, deleteModule, setModule, updateModule, setModules} from "./modulesReducer";

function ModuleList() {
    const {courseId} = useParams();
    useEffect(() => {
        client.findModulesForCourse(courseId)
            .then((modules) =>
                      dispatch(setModules(modules))
            );
    }, [courseId]);
    const modules = useSelector((state) => state.modulesReducer.modules);
    const module = useSelector((state) => state.modulesReducer.module);
    const dispatch = useDispatch();

    const handleAddModule = () => {
        client.createModule(courseId, module).then((module) => {
            dispatch(addModule(module));
        });
    };

    const handleDeleteModule = (moduleId) => {
        client.deleteModule(moduleId).then((status) => {
            dispatch(deleteModule(moduleId));
        });
    };

    const handleUpdateModule = async () => {
        const status = await client.updateModule(module);
        dispatch(updateModule(module));
    };



    const grid = <BsGripVertical className="fa"/>
    const check = <AiFillCheckCircle className="check-circle"/>
    const plus = <AiOutlinePlus className="fa"/>
    const line = <HiEllipsisVertical className="fa"/>
    return (
        <div>
            <div className="module-editor">
            <input className="form-control" value={module.name}
                   onChange={(e) => dispatch(setModule({
                                                  ...module, name: e.target.value }))}
            />
            <textarea className="form-control" value={module.description}
                      onChange={(e) => dispatch(setModule({
                                                     ...module, description: e.target.value }))}
            />
                <button onClick={handleAddModule}
                        className="btn btn-light add-btn">
                    Add
                </button>
                <button className="btn btn-light update-btn" onClick={() => handleUpdateModule()}>
                    Update
                </button>

            </div>



            {
                modules
                    .filter((module) => module.course === courseId)
                    .map((module, index) => (
                        <div className="row wd-modules">
                            <div className={`col`}>
                                <div className={`list-group`}>
                                    <a href="#"
                                       className="list-group-item list-group-item-secondary module-title">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div>
                                                {grid}
                                                {module.name}
                                            </div>
                                        <div className="d-inline-flex float-end p-1 justify-content-between align-items-center">
                                            {check}
                                            {plus}
                                            {line}
                                            <button className="btn btn-sm edit-btn"
                                                    onClick={(event) => {
                                                        event.preventDefault();
                                                        dispatch(setModule(module));
                                                    }}>
                                                Edit
                                            </button>
                                            <button className="btn btn-sm delete-btn"
                                                    onClick={(event) => {
                                                        event.preventDefault();
                                                        handleDeleteModule(module._id);
                                                    }}>
                                                Delete
                                            </button>
                                        </div>
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