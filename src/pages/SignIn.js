import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {AiFillFacebook} from 'react-icons/ai';
import logo from '../img/logo-n.png';

const SignIn = () => {
  const [datos, setDatos] = useState({
    email: '',
    password: ''
  })

  const {email, password} = datos;

  const onChange = (e)=>{
    setDatos({
      ...datos,
      [e.target.name] : e.target.value
    })
  }

  const onSubmit = (e)=>{
    e.preventDefault()

  }
  
  return (
    <div className='contenLogin'>
      <Link to='/'>
        <img src={logo} className='image' alt='logo'/>
      </Link>

      <div className='form'>
        <div className='inputs'>
          <h2>Inicia sesión</h2>
          <div >
            <form className='log' onSubmit={onSubmit}>
              <input type='email' className='email' name='email' onChange={onChange} value={email} placeholder='Email o número de teléfono'/>
              <input type='password' className='pass' name='password' onChange={onChange} value={password} placeholder='Contraseña'/>
              <input type='submit' value='Iniciar sesión' className='sub'/>
            </form>
          </div> 
          <div className='record'>
            <div className='recordar'>
              <input type='checkbox' className='check'/>
              <label>Recuérdame</label>
            </div>
            <a src='#'>¿Necesitas ayuda?</a>
          </div>

          <div className='suscri'>
            <div className='facebook'>
              <AiFillFacebook className='ico'/>
              <p>Iniciar sesión con Facebook</p>
            </div>
            <div className='suscrib'>
              <p>¿Primera vez en Netflix?</p>
              <a src='#'>Suscíbete ahora.</a>
            </div>
            <div className='mas-info'>
              Esta página está protegida por Google reCAPTCHA para comprobar que no eres un robot.
              <a src='#'>Más info.</a>
            </div>
            
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn