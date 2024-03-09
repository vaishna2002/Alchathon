import React from 'react'
import splash from '../../../src/Images/splash.png';
import '../../Pages/Splash/Splash.css'

const splashImg= splash;

export default function Splash() {
  return (
    <div className='mainImg'>
        <div className='imageProp'>
            <img src={splashImg}/>
        </div>
    </div>
  )
}
