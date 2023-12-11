import React from 'react'
import '../Blogs/Blogs.css'
import Travel1 from '../../Assets/travel.jpg'
import Travel2 from '../../Assets/travel1.jpg'
import Client from '../../Assets/guide3.png'

const Blogs = () => {
  return (
    <div className="blogs">
        <h2>Latest, Travel Deals</h2>
        <div className="blogs-wrapper">
            <div className="blogs-content">
                <img src={Travel1} alt="" />
                <span>Zanzibar to Victoria Falls</span>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br /> Iusto reiciendis exercitationem cupiditate sint sed sunt libero quos <br />
                 tenetur consequatur aut sapiente maiores, nam saepe ipsum accusam <br /> temporibus asperiores voluptates a.</p>
            </div>
            <div className="blogs-content">
                <img src={Travel2} alt="" />
                <span>Zanzibar to Zanzibar North Coast</span>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br /> Iusto reiciendis exercitationem cupiditate sint sed sunt libero quos <br />
                 tenetur consequatur aut sapiente maiores, nam saepe ipsum accusam <br /> temporibus asperiores voluptates a.</p>
            </div>
        </div>

        <div className="clients">

            <div className="clients-says">

            <h1>What, Our Clients Say</h1>
            <p className='para'>"Perhaps travel cannot prevent bigotry, but by demonstrating that all pepoles cry, laugh,</p>
            <p>Worry, and, die, it can introduce the idea that if we try and understand each other, we may</p>
            <span>even become friends."</span>
            </div>
          
          <div className="clients-img">
            <img src={Client} alt="" />
            <p>Brian Clark</p>
            <span>CEO & Founder</span>
          </div>
        </div>
    </div>
  )
}

export default Blogs