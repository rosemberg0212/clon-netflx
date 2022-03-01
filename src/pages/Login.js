import { makeStyles } from '@material-ui/core';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import logo from '../img/logo-n.png';

const Login = () => {
  const classes = useStyles();
  const [signIn, setsignIn] = useState(false);
  return (
    <div className='login'>
      <img src={logo} className='image' alt='logo'/>
      <Link to="/signIn">
        <button className='btn'>Iniciar sesión</button>
      </Link>
      

      <div className='contenido'>
        <h1>Películas y series ilimitadas y mucho más.</h1>
        <p className='text1'>Disfruta donde quieras. Cancela cuando quieras.</p>
        <div className='contac'>
          <p className='text2'>¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o reiniciar tu membresía de Netflix.</p>
          <form>
            <input type='email' className='email' placeholder='Email'/>
            <button>Comenzar</button>
          </form>
          
        </div>
        
      </div>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    
  }
}));

export default Login