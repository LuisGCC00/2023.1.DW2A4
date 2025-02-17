import React from "react";
import {CgClose, CgInfo} from "react-icons/cg";
import { useHistory } from "react-router-dom";

import "./Task.css";

const Task = ({ task, handleTaskClick, handleTaskDeletion }) => {
    const history = useHistory();

    const handleTaskDetailsClick = () => {
        history.push(`/${task.title}`);
    };

    return (
        <div className="task-container" 
        style={task.completed ? {opacity: "0.6", borderLeft: "6px solid #632801" } : {}}>
            <div className="task-title" onClick={() => handleTaskClick(task.id)}>
                {task.title}    
            </div> 
            <div className="buttons-task-container">
                <button className="see-task-details-button" onClick={handleTaskDetailsClick}>
                    <CgInfo />
                </button> 
                <button className="remove-task-button" onClick={() => handleTaskDeletion(task.id)}>
                    <CgClose />   
                </button>    
            </div>   
        </div>
    );
};

export default Task;