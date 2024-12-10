import React from 'react'
import '../styles/transport.css'
import NavBar from './Navbar'
import Footer from './Footer'
import { FaTaxi,FaBusAlt,FaTrain,FaPlane } from "react-icons/fa";
import airplaneVid from '../images/2658998-hd_1920_1080_30fps.mp4'; // Adjust the path based on the component's location
import railvid from '../images/856360-hd_1920_1080_30fps.mp4'
import busvid from '../images/4194079-hd_1920_1080_30fps.mp4'
import cabvid from '../images/3656906-hd_1920_1080_30fps.mp4'

import bookeasily from '../images/4464270-uhd_3840_2160_25fps.mp4'


const Transport = () => {

    const scrollforcab=()=>{
        const section=document.getElementById('reach-sectionforcab');
        if(section){
            section.scrollIntoView({behavior:'smooth'});
        }
    }
    const scrollforbus=()=>{
        const section=document.getElementById('reach-sectionforbus');
        if(section){
            section.scrollIntoView({behavior:'smooth'});
        }
    }
    const scrollforair=()=>{
        const section=document.getElementById('reach-sectionforair');
        if(section){
            section.scrollIntoView({behavior:'smooth'});
        }
    }
    const scrollforrail=()=>{
        const section=document.getElementById('reach-sectionforrail');
        if(section){
            section.scrollIntoView({behavior:'smooth'});
        }
    }

  return (
    <>
    <NavBar/>
    {/* <div className='transport-heading'>
        <h1>Effortless travel begins with the right ride. Book your transportation with us for a seamless journey, where comfort, reliability, and convenience meet at every mile.</h1>
    </div> */}
    
    <div className="video-transport">
    <div className="background-overlay"></div>
  <video autoPlay loop muted className="background-video">
    <source src={bookeasily} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <div className="quote-overlay2">
  <div className='transport-choice'>

 


<h3>Seamless journeys by cab, train, or bus and even flights – travel your way, anytime, anywhere!</h3>
<div className='iconss'>
  <FaTaxi className='icon' onClick={scrollforcab}/>
  <FaBusAlt className='icon' onClick={scrollforbus}/>
  <FaTrain className='icon' onClick={scrollforrail}/>
  <FaPlane className='icon' onClick={scrollforair}/>
</div>

</div>

    <br />
  </div>
</div>


 

    <div>
    <div className="video-transport" id="reach-sectionforair">
  <div className="background-overlay"></div>
  <video autoPlay loop muted className="background-video">
    <source src={airplaneVid} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <div className="quote-overlay">
    "Take to the skies with comfort and affordability – your dream destination is just a flight away!" 
    <br />
<button>Book now</button>
  </div>
</div>



    <div className="video-transport" id="reach-sectionforrail">
  <div className="background-overlay"></div>
  <video autoPlay loop muted className="background-video">
    <source src={railvid} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <div className="quote-overlay">
    "All aboard for a scenic journey! Travel in comfort, with breathtaking views along the way, and arrive relaxed and on time" 
    <br />
    <button>Book now</button>

  </div>
</div>


    <div className="video-transport" id="reach-sectionforcab">
  <div className="background-overlay"></div>
  <video autoPlay loop muted className="background-video">
    <source src={cabvid} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <div className="quote-overlay">
    "Hop in and ride in style—your destination is just a smooth drive away. Comfort, convenience, and speed all in one ride!" 
    <br />
    <button>Book now</button>

  </div>
</div>


    <div className="video-transport" id="reach-sectionforbus">
  <div className="background-overlay"></div>
  <video autoPlay loop muted className="background-video">
    <source src={busvid} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <div className="quote-overlay">
    "Sit back, relax, and enjoy the ride. Our buses take you where you need to go with comfort and reliability" 
    <br />
    <button>Book now</button>

  </div>
</div>





    
    
    </div>
    <Footer/>

    </>
  )
}

export default Transport
