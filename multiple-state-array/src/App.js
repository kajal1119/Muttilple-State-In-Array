import Header from './Component/Header';
import './App.css';
import TaskList from './Component/TaskList';
import React from 'react';

function App() {
 const info="Random"
  return (
  <React.Fragment>
    <Header/>
    <TaskList info={info}/>
    </React.Fragment>
  );
}

export default App;
