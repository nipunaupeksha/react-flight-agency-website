import { FC } from 'react'
import image from '../../assets/aeroplane.jpg'

const Lounge: FC = () => {
  return (
    <div className="lounge container section">
      <div className="sectionContainer grid">
        <div className="imgDiv">
          <img src={image} alt="" />
        </div>
        <div className="textDiv">
          <h2>Unaccompanied Minor Lounge</h2>
        </div>
        <div className="grids grid">
          <div className="singleGrid">
            <span className="gridTitle">Help through the airport</span>
            <p>
              You can also call airlines from your phone and book a flight
              ticket to one of your favourite destinations.
            </p>
          </div>
          <div className="singleGrid">
            <span className="gridTitle">Care on the flight</span>
            <p>
              You can also call airlines from your phone and book a flight
              ticket to one of your favourite destinations.
            </p>
          </div>
          <div className="singleGrid">
            <span className="gridTitle">Priority boarding</span>
            <p>
              You can also call airlines from your phone and book a flight
              ticket to one of your favourite destinations.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Lounge
