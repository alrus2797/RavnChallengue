import React from 'react';
import Dashboard from './views/dashboard/Dashboard';
import Sidebar from './components/sidebar/Sidebar';
import Searchbar from './components/searchbar/Searchbar';
import { Routes, Route } from 'react-router-dom';
import TaskList from './views/tasklist/TaskList';
import Topbar from './components/topbar/Topbar';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Searchbar/>
      <Topbar/>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/tasklist' element={<TaskList/>}/>
      </Routes>
    </div>
  );
}

export default App;
