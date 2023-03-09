import React from 'react';
import './App.css';
import Home from './views/Home';
import Sidebar from './components/sidebar/Sidebar';
import Searchbar from './components/searchbar/Searchbar';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Searchbar/>
      <Home/>
    </div>
  );
}

export default App;
