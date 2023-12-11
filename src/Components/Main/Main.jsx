import React from 'react'
import '../Main/Main.css'
import Hotel from '../../Assets/hotels.jpg'
import Cruise from '../../Assets/cruise.jpg'
import Tour from '../../Assets/main.jpg'
import Tick from '../../Assets/tick.png'
import Boat from '../../Assets/boat.jpg'

const Main = () => {
  return (
    <div className="main">
        <div className="main-wrapper">
            <div className="main-content">
                <p>Incredible Travel Experience</p>
                <span>Curated For You</span>
            </div>

            <div className="main-page-content">
            <div className="card">
            <div className="guide-profile-card">
                <img src={Hotel} alt="" />
                <h4>HOTELS</h4>
                <p>Breakfast daily. A spa, dining, or resort credit. Room upgrades, exclusive amenities and experiences, and more.</p>
                <button>Learn More</button>            
            </div>
      
            <div className="guide-profile-card">
                <img src={Cruise} alt="" />
                <h4>CRUISES</h4>
                <p>Breakfast daily. A spa, dining, or resort credit. Room upgrades, exclusive amenities and experiences, and more.</p>
                <button >Learn More</button>
            </div>

            <div className="guide-profile-card">
                <img src={Tour} alt="" />
                <h4>TOURS</h4>
                <p>Breakfast daily. A spa, dining, or resort credit. Room upgrades, exclusive amenities and experiences, and more.</p>
                <button >Learn More</button>
            </div>
            </div>
            </div>

            <div className="travel-dairies">

            <div className="travel-content">
                <div className="travelers">

                    <span>Traveling is a good method <br />
                    to release stress</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum laborum culpa minus, <br />
                     accusamus porro molestiae minima id accusantium eum expedita nihil</p>

                        <div className="travel-img">
                        <img src={Tick} alt="" width={20} height={20}/>
                        <p>Dedicated onboard hosts</p>
                        </div>
                        <div className="travel-img">
                        <img src={Tick} alt="" width={20} height={20}/>
                        <p>Private port tours, shipboard credits, and more</p>
                        </div>
                        <div className="travel-img">
                        <img src={Tick} alt="" width={20} height={20}/>
                        <p>Experiences in more than 2,500 global destinations</p>
                        </div>

                        <button>Learn More</button>
                        </div> 
                        
                        <div className="travel-content-img">
                            <img src={Boat} alt="" />
                        </div>
                        </div>
            </div>
        </div>
    </div>
  )
}

export default Main