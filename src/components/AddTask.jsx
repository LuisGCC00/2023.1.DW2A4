import React, { useState } from "react";
import "./AddTask.css";
import Button from "./Button";

const AddTask = ({ handleTaskAddition }) => {
    const [inputData, setInputData] = useState("");

    const handleInputChange = (e) => {
        setInputData(e.target.value);
    }

    const verifyValue = (inputData) => {
        let pattern = /\w+[!@#$%&*()\-+=?/{}]*/;
        if(pattern.test(inputData))
            handleTaskAddition(inputData);
        else
            alert("Preencha o campo de título corretamente!\n\tPadrão: no mínimo uma letra, digito ou sublinhado.")
    };

    const handleAddTaskClick = () => {
        verifyValue(inputData)
        setInputData("");
    };

    return (
        <>
            <div className="add-task-container">
                <input onChange={handleInputChange} value={inputData} 
                className="add-task-input" type="text" placeholder="Digite o título aqui"/>
                <div className="add-task-button-container">
                <Button onClick={handleAddTaskClick}>Adicionar</Button>
                </div>
            </div>
        </>
    );
};

export default AddTask;