import React from "react";
import { useHistory, useParams } from "react-router-dom";
import Button from "./Button";

import "./TaskDetails.css";


const TaskDetails = () => {
    const params = useParams();
    const history = useHistory();

    const handleBackButtonClick = () => {
        history.goBack();
    };

    return (
        <>
            <div className="task-details-container">
                <h2>{params.taskTitle}</h2>
                <hr/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Asperiores, maiores dolorum, perferendis doloremque 
                    pariatur labore facilis optio sed saepe fuga inventore 
                    totam numquam modi dolorem. Eligendi temporibus quasi accusantium officiis?
                </p>
            </div>
            <div className="back-button-container" onClick={handleBackButtonClick}>
                <Button>Voltar</Button>
            </div>
        </>
    );
};

export default TaskDetails;