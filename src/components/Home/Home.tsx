import { FC , useEffect} from 'react'

import video from '../../assets/video.mp4'
import aeroplane from '../../assets/takeoff.png'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Home: FC = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])

  return (
    <div className="home flex container">
      <div className="mainText">
        <h1 data-aos="fade-up" data-aos-duration="2500" className="mainTextHeading">
          Create Ever-lasting Memories with Us
        </h1>
      </div>
      <div className="homeImages flex">
        <div className="videoDiv">
          <video src={video} autoPlay muted loop className="video"></video>
        </div>
        <img src={aeroplane} alt="" className="plane" />
      </div>
    </div>
  )
}

export default Home
