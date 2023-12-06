import React from 'react'
import DarkMode from '../../Hooks/Darkmode';
import './style.css'
const Header = () => {
  const {handleTheme} = DarkMode();

  return (
    <div className='header'>
    <div className="headerContent">
     <h2 className='headName'>Where in the world?</h2>
     <span onClick={handleTheme} className='darkMode'><i class="fa-regular fa-moon"></i> Dark Mode</span>
    </div>
   
  </div>
  )
}

export default Header