import React from 'react'
import '../Home/Hero.css'

const Hero = () => {
  return (
    <div className="hero">
        <div className="hero-wrapper">
            <div className="hero-banner">
    
                <div className="hero-box">           
            <div className="hero-top">
                <h1>NORTHERN</h1>
                <ul className="hero-menu">
                    <li>Home</li>
                    <li>About</li>
                    <li>Service</li>
                    <li>Blog</li>
                </ul>

                <button className="btn">Get In Touch</button>
            </div>

            </div>
            <div className="hero-content">
                <span className='travel'>TRAVEL AGENCY</span>
                <span>Adventure</span>
                <button>Explore Now</button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Hero