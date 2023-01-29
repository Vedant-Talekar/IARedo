import React from 'react';
import './App.css';
import './Toolbar';
import './Sidebar';
import './Toolbar';
import './index';
import Backdrop from './Backdrop';
import Sidebar from './Sidebar';
import Toolbar from './Toolbar';
import index from './index';
import { useState } from 'react';





const App = () => {
  
    const[sidebar, setSidebar] = useState (false);

    const toggleSidebar = () => {
      setSidebar((prevState) => !prevState)
    }

  return (
    <div>
      <Toolbar openSidebar = {toggleSidebar}/>
      <Sidebar/>
      <Backdrop/>
     
    </div>
  )
}

export default App;
