import { useState } from "react";
import React from 'react';
import NewTask  from "./NewTask";
import TasksList from "./TasksList";


export default function MyComponent(){

    const [newTask, setNewTask] = useState({});

    const handleChange = ({target}) =>{
        const {name, value} = target;
        setNewTask((prev) => ({...prev, id: Date.now(), [name]: value }));
    };
    const [allTasks, setAllTasks] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
         if (!newTask.taskName) return;
        setAllTasks((prev) => [newTask, ...prev]);
        setNewTask({});
    };

    const handleDelete =(taskIdToRemove) => {
        setAllTasks((prev) => prev.filter(
            (task) => (task.id !== taskIdToRemove)
          ));
    };
    return (
        <main>
            <h1>To-do List</h1>
                <NewTask
                    newTask={newTask}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                />
            <TasksList allTasks={allTasks} handleDelete={handleDelete} />
        </main>
    );
}