import Task from './Task';

const Tasks = ({tasks, deleteTask, toggleReminder}) => {
  return (
    <>
        {tasks && tasks.map((task) => (
          <Task key={task.id} deleteTask={deleteTask} toggleReminder={toggleReminder} task={task}/>
          )
        )}
    </>
  )
}

export default Tasks