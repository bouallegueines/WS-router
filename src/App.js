import { useState } from 'react';
import './App.css';
import AddTask from './Components/AddTask';
import TaskList from './Components/TaskList';
import {List} from './DataTask';


function App() {
  const [newList, setNewList] = useState(List);
  const handleAdd=(newTask)=>{
    setNewList([...newList,newTask])
  }
  return (
    <div style={{ height: "1000px" }} className="body">
      <div className="free">
        <h1 className="title">ToDo-List </h1>
      </div>
      <AddTask handleAdd={handleAdd} />
      <TaskList List={newList} />
    </div>
  );
}

export default App;
