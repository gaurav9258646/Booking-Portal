import React from 'react'
import DesktopSidebar from './DesktopSidebar';
import style from "../styles/layout.module.css"
import Navbar from "../Components/Navbar"


export const Layout = ({children}) => {
  return (

      <div>
        <Navbar/>
      <div className={style.body}>
        <div><DesktopSidebar/></div>
        <div className={style.children}>{children}</div>
      </div>  
      </div>
      
  )
}

export default Layout;
