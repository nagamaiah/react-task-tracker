import MyHeader from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import {useState} from 'react';

const tasksArray = [
  {
    id: 1,
    text: 'task1',
    day: "Feb 5th 2023",
    reminder: true
  },
  {
    id: 2,
    text: 'task2',
    day: "Feb 7th 2023",
    reminder: true
  },
  {
    id: 3,
    text: 'task3',
    day: "Feb 9th 2023",
    reminder: false
  }
];

function App() {
  const [tasks, setTasks] = useState(tasksArray);
  const [showAddTask, setShowAddTask] = useState(false)

  // Add a task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) +1;
    const newTask = {...task, id}
    setTasks([newTask, ...tasks]);
  }

  // Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  };

  // Toggle reminder 
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => {
        return task.id === id ? {...task, reminder: !task.reminder} : task;
    }))
  }



  return (
    <div className="container">
      <MyHeader onAddClick={() => setShowAddTask(!showAddTask)} addCloseText={showAddTask} title="Task Trackerrr" />
      {showAddTask && <AddTask addTask={addTask}/>}
      {tasks.length>0 ? <Tasks tasks={tasks} toggleReminder={toggleReminder} deleteTask={deleteTask}/> : "No task to show"}
    </div>
  )
}

export default App;
