import { makeStyles, Typography, Button } from '@material-ui/core';
import React, { useContext, useEffect } from 'react';
import {FaPlay} from 'react-icons/fa'
import {AiOutlineInfoCircle} from 'react-icons/ai'
import MovieContext from '../context/movie/movieContext';
import fondo from '../img/Lupin+Part+2+banner.jpg'


const Banner = () => {

  const movieContext = useContext(MovieContext);
  const {getMovie,banner} = movieContext;

  useEffect(()=>{
    getMovie()
  },[])

    const truncate = (string, n) => string?.length > n ? `${string.substr(0, n-1)}...`: string
    // if(banner){
    //   banner.map((movie)=>console.log(movie.original_title))
    //   console.log(banner[0].original_title)
    // }
    const num = Math.round(Math.random()*20);
    

  return (
    <div className='banner'>
    
      <div className='content'>

      <div className='ubicacion'>
        
      {
            banner ? 
            ( 
              <div className='posiso'>
                <h1 className='titulo'>{banner[num].original_title}</h1> 
                
                <p>
                  {
                    truncate(banner[num].overview,150)
                  }
                </p>

                <div className='buttons'>
                  <button className='btn'><FaPlay/> Reproducir</button>
                  <button className='btn2'><AiOutlineInfoCircle className='icoInfo'/> Más información</button>
                </div>
              </div>
              
            ): null
        }
        
      </div>
        
        {/* <div className='fadeBottom'></div> */}

      </div>
    </div>
  )
}


export default Banner