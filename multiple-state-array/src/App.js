import Header from './Component/Header';
import './App.css';
import TaskList from './Component/TaskList';
import React from 'react';
import Footer from './Component/Footer';

function App() {
 const info="Random"
  return (
  <div className='App'>
    <Header/>
    <TaskList info={info}/>
    <Footer/>
    </div>
  );
}

export default App;
