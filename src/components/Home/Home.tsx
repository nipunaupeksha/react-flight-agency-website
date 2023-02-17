import { FC } from 'react'

import video from '../../assets/video.mp4'
import aeroplane from '../../assets/takeoff.png'

const Home: FC = () => {
  return (
    <div className="home flex container">
      <div className="mainText">
        <h1 className="mainTextHeading">
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
