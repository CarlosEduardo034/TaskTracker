import { useEffect, useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './styles/App.css';

function App() {
  const [Tasks, setTasks] = useState(() => {
    const stored = localStorage.getItem('Tasks');
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem('Tasks', JSON.stringify(Tasks));
  }, [Tasks]);

  const addTask = (name) => {
    const newTask = {
      id: Date.now(),
      name,
      checked: false,
      date: new Date().toDateString()
    };
    setTasks([newTask, ...Tasks]);
  };

  const deleteTask = (id) => {
    setTasks(Tasks.filter(Task => Task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(Tasks.map(h => h.id === id ? { ...h, checked: !h.checked } : h));
  };

  return (
    <div className="App">
      <h1>Task Tracker 📝</h1>
      <TaskForm onAdd={addTask} />
      <TaskList Tasks={Tasks} onToggle={toggleTask} onDelete={deleteTask} />
    </div>
  );
}

export default App;
