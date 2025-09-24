import React from 'react'
import DesktopSidebar from './DesktopSidebar';
import Navbar from "../Components/Navbar"


export const Layout = ({children}) => {
  return (

      <div>
        <Navbar/>
      <div >
      <DesktopSidebar/>
      <div >
        {children}
      </div>  
      </div>
      
    </div>
  )
}

export default Layout;
