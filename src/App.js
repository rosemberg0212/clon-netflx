import { makeStyles } from '@material-ui/core';
import React,{useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Paypal from './pages/Paypal';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import './sass/main.css'

import MovieState from './context/movie/movieState';


function App() {
  const user = null;
  const classes = useStyles();
  return (
    <div className='home'>
      <MovieState>
        <Router>
          <Routes>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/checkout' element={<Paypal/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/signIn' element={<SignIn/>}/>   
            <Route path='/' element={<Login/>}/>
          </Routes> 
        </Router>
      </MovieState>
      
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundColor: "#fff",
  }
}));

export default App;
