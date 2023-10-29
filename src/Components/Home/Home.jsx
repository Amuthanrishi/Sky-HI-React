import React, {useEffect} from 'react'
import video from '../../assets/video.mp4'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
  },[])



  return (
    <div className='home flexcontainer'>
      <div className='maintext'>
        <h1 data-aos='fade-up'data-aos-duration='2500' >Create Ever-lasting Memories with us</h1>
      </div>

      <div data-aos='fade-down'data-aos-duration='2500' className="homeImages flex">
        <div className="videoDiv">
          <video src={video} autoPlay muted loop className='video' video-width='50' height='125' ></video>
        </div>

        
      </div>
    </div>
  )
}

export default Home