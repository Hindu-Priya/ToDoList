import React  from "react";

export default function NewTask({ newTask, handleChange, handleSubmit }){

    return(
        // <form onSubmit={handleSubmit}>
        //     <input name = "TaskName" value = {newTask.TaskName } onChange={handleChange} placeholder="Write down your task here..">
        //     </input>
        //     {! newTask.TaskName ? null : (
        //         <>
        //         <textarea name = "TaskDescription" value = {newTask.TaskDescription || '' } onChange={handleChange} placeholder="Detailed Description...">
        //         </textarea>
        //         <button type="submit">Add Task</button>
        //         </>
        //     )}
            
        // </form>
        <form onSubmit={handleSubmit}>
        <input
          name="taskName"
          placeholder="New task"
          value={newTask.taskName || "" }
          onChange={handleChange}
        />
        {!newTask.taskName ? null : (
          <>
            <textarea
              name="description"
              placeholder="Details..."
              value={newTask.description || "" }
              onChange={handleChange}
            />
            <button type="submit">Add Task</button>
          </>
        )}
      </form>
    );
}