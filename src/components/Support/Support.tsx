import { FC } from 'react'
import gridImage from '../../assets/grid-01.png'

const Support: FC = () => {
  return (
    <div className="support container section">
      <div className="sectionContainer">
        <div className="titlesDiv">
          <small>travel support</small>
          <h2>Plan your travel with confidence</h2>
          <p>
            Find help with booking and travel plans, see what to expect along
            the journey!
          </p>
        </div>

        <div className="infoDiv grid">
          <div className="grid textDiv">
            <div className="singleInfo">
              <span className="number colorTwo">01</span>
              <h4>Travel requirements for Dubai</h4>
              <p>
                Find help with booking and travel plans, see what to expect
                along the journey to your favourite destinations!
              </p>
            </div>
            <div className="singleInfo">
              <span className="number colorOne">02</span>
              <h4>Chauffeur services at your arrival</h4>
              <p>
                Find help with booking and travel plans, see what to expect
                along the journey to your favourite destinations!
              </p>
            </div>
            <div className="singleInfo">
              <span className="number colorTwo">03</span>
              <h4>Multi-risk travel insurance</h4>
              <p>
                Find help w ith booking and travel plans, see what to expect
                along the journey to your favourite destinations!
              </p>
            </div>
          </div>
          <div className="imgDiv">
            <img src={gridImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Support
