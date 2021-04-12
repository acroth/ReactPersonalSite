import React,{useState} from 'react';
import * as Icons from "react-icons/fa"; //importing all Font Awesome icons as "Icons" to reduce the amount of import statements
import * as Io5Icons from "react-icons/io5";//Import all IO5 icons as IoIcons
import { Link } from 'react-router-dom';
import { NavData } from './NavData';
import './NavBar.css';
import {IconContext} from 'react-icons';


function NavBar() {
    const [sidebar,setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
    //IconContext.Provider to set all icon colors to white
    return (
        <>
        <IconContext.Provider value={{color:'#fff'}}>
            <div className="navbar">
                <Link to="#" className='menu-bars'>

                    <Icons.FaBars onClick={showSidebar} />

                </Link>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className='navbar-toggle'>
                        <Link to ="#" className = 'menu-bars'>
                            <Io5Icons.IoCloseSharp/>
                        </Link>
                    </li>
                    {NavData.map((item,index) => {
                        return(
                            <li key = {index} className = {item.cName}>
                                <Link to = {item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
            </IconContext.Provider>
        </>
    )
}

export default NavBar
