import React from 'react'
import '../Footer/Footer.css' 
import Social from '../../Assets/social.png'
import Social1 from '../../Assets/social1.png'
import Social2 from '../../Assets/social2.png'
import Social3 from '../../Assets/social3.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footerwarpper">
            <div className="footerContent">
                <p>Experience a custom Adventure</p>
                <span>Made Just for You</span>
            </div>

            <div className="subscribe">
                <input type="e-mail" placeholder='Enter Your E-mail'/>
                <button>Book Now</button>
            </div>
            </div>

            <div className="footer-main">
                <div className="footer-content">
                    <span>NORTHERN</span>
                    <p className='parag'>A Person susceptible to 'wanderlust' is not so</p>
                    <p>much addicted to movement as commited to</p>
                    <p>transformation</p>
                </div>

                <div className="newsletter">
                    <h2>Subscribe to our newsletter</h2>
                    <input type="email" placeholder='Enter Your Email address'/>
                    <button>Subscribe</button>
                </div>
            

            <div className="social">
                <p>Follow Us</p>
                <div className="social-img">
                <img src={Social} alt="" />
                <img src={Social1} alt="" />
                <img src={Social2} alt="" />
                <img src={Social3} alt="" />
                </div>
                </div>
            </div>
            </div>
  )
}

export default Footer