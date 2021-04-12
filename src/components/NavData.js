import React from 'react';
import * as Icons from "react-icons/fa"; //importing all Font Awesome icons as "Icons" to reduce the amount of import statements
import * as Io5Icons from "react-icons/io5";//Import all IO icons (4) as IoIcons


export const NavData = [

    {
        title : 'Home',
        path : '/',
        icon: <Icons.FaHome/>,
        cName : 'nav-text'
    },
    {
        title : 'About',
        path : '/About',
        icon: <Icons.FaAtom/>,
        cName : 'nav-text'
    },
    /*{
        title : 'Contact',
        path : '/Contact',
        icon: <Io5Icons.IoMailOutline/>,
        cName : 'nav-text'
    },TODO not enough time to add Contact functionality --AR */
    {
        title : 'Portfolio',
        path : '/Portfolio',
        icon : <Icons.FaCodeBranch/>,
        cName : 'nav-text'
    }

]