import { makeStyles, Typography, Button } from '@material-ui/core';
import React from 'react';
import {FaPlay} from 'react-icons/fa'
import {AiOutlineInfoCircle} from 'react-icons/ai'


const Banner = () => {
    const truncate = (string, n) => string?.length > n ? `${string.substr(0, n-1)}...`: string
  return (
    <div className='banner'>
      <div className='content'>

      <div className='ubicacion'>
        
        <div className='posiso'>
          <h1 className='titulo'>
            Movie Title
          </h1>
          
          <p>
            {
              truncate("Movie description Movie description Movie description Movie description Movie description Movie description Movie description Movie description Movie description Movie description Movie description Movie description Movie description Movie description Movie description Movie description",150)
            }
          </p>

          <div className='buttons'>
            <button className='btn'><FaPlay/> Reproducir</button>
            <button className='btn2'><AiOutlineInfoCircle className='icoInfo'/> Más información</button>
          </div>
        </div>
      </div>
        
        {/* <div className='fadeBottom'></div> */}

      </div>
    </div>
  )
}


export default Banner