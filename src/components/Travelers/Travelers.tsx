import { FC, useEffect } from 'react'
import bali from '../../assets/bali.jpg'
import egypt from '../../assets/egypt.jpg'
import france from '../../assets/france.jpg'
import dubai from '../../assets/dubai.jpg'

import traveler1 from '../../assets/traveler01.jpeg'
import traveler2 from '../../assets/traveler02.jpeg'
import traveler3 from '../../assets/traveler03.jpeg'
import traveler4 from '../../assets/traveler04.jpeg'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Travelers: FC = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <div className="travelers container section">
      <div className="sectionContainer">
        <h2>Top travelers of this month!</h2>

        <div className="travelersContainer grid">
          <div className="singleTraveler" data-aos="fade-up"
          data-aos-duration="2500">
            <img src={france} alt="" className="destinationImage" />
            <div className="traverlerDetails">
              <div className="travelerPicture">
                <img src={traveler1} className="travelerImage" alt="" />
              </div>
              <div className="travelerName">
                <span>Kristen Stewart</span>
                <p>@kristenstewart</p>
              </div>
            </div>
          </div>
          <div className="singleTraveler" data-aos="fade-up"
          data-aos-duration="2500">
            <img src={dubai} alt="" className="destinationImage" />
            <div className="traverlerDetails">
              <div className="travelerPicture">
                <img src={traveler2} className="travelerImage" alt="" />
              </div>
              <div className="travelerName">
                <span>Emily Ghoul</span>
                <p>@emilyghoul</p>
              </div>
            </div>
          </div>
          <div className="singleTraveler" data-aos="fade-up"
          data-aos-duration="2500">
            <img src={bali} alt="" className="destinationImage" />
            <div className="traverlerDetails">
              <div className="travelerPicture">
                <img src={traveler3} className="travelerImage" alt="" />
              </div>
              <div className="travelerName">
                <span>Emma Watson</span>
                <p>@emmawatson</p>
              </div>
            </div>
          </div>
          <div className="singleTraveler" data-aos="fade-up"
          data-aos-duration="2500">
            <img src={egypt} alt="" className="destinationImage" />
            <div className="traverlerDetails">
              <div className="travelerPicture">
                <img src={traveler4} className="travelerImage" alt="" />
              </div>
              <div className="travelerName">
                <span>Ruru Sama</span>
                <p>@rurusama</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Travelers
