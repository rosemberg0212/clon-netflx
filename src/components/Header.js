import { AppBar, Avatar, IconButton, makeStyles, Toolbar } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import logo from '../img/logo-n.png';
import avatar from '../img/Netflix-avatar.png' 
import {BiSearchAlt} from 'react-icons/bi'
import {FaBell} from 'react-icons/fa'

const Header = () => {
    // const classes = useStyles();
    const [show, setShow] = useState(false);

    const hideHeader = ()=>{
        if(window.scrollY > 100){
            setShow(true);
        }else{
            setShow(false);
        }
    }

    useEffect(()=>{
        window.addEventListener("scroll", hideHeader);
        return ()=>window.removeEventListener("scroll", hideHeader);
    }, [])
    return (
        <nav className={`navbar ${show && 'transp'} `}>
            <div className='firs-menu'>
                <img src={logo} alt='logo' className='logo'/>
                <ul>
                    <li>Inicio</li>
                    <li>Series</li>
                    <li>Películas</li>
                    <li>Novedades populares</li>
                    <li>Mi lista</li>
                </ul>
            </div>
            <div className='second-menu'>
                <ul>
                    <li><BiSearchAlt className='search'/></li>
                    <li>Niños</li>
                    <li><FaBell className='bell'/></li>
                    <li>
                        <img src={avatar} alt='avatar' className='avatar'/>
                    </li>
                    
                </ul>
            </div>
        </nav>
    )
}

// const useStyles = makeStyles((theme) => ({
//     root: {
//         backgroundColor: '#111',
//         top: 0,
//         left: 0,
//         right: 0,
//     },
//     logo: {
//         width: '100px',
//         cursor: 'pointer',
//     },
//     transparent: {
//         backgroundColor: 'transparent'
//     },
//     toolbar: {
//         display: 'flex',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//     }
// }));

export default Header