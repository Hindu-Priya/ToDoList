import React from "react";

export default function TasksList({allTasks, handleDelete}){
    return(
        <ul>
        {allTasks.map((task) => (
            <li key={task.id}>
                <div>
                    <h2>{task.taskName}</h2>
                    <button onClick={() => handleDelete(task.id)}>X</button>
                </div>
                {!task.description ? null : <p>{task.description}</p>}
            </li>
        ))}
        </ul>
        
    );
}   