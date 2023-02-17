import { FC } from 'react'

import video from '../../assets/video.mp4'
import aeroplane from '../../assets/aeroplane.png';

const Home: FC = () => {
  return (
    <div className="home flex container">
      <div className="mainText">
        <h1>Create Ever-lasting Memories with Us</h1>
      </div>
      <div className="homeImages flex">
        <div className="videoDiv">
          <video src="" className="video"></video>
        </div>
        <img src="" alt="" className="plane" />
      </div>
    </div>
  )
}

export default Home
