import { FC } from 'react'
import { RxCalendar } from 'react-icons/rx'
import { BsShieldCheck, BsBookmarkCheck } from 'react-icons/bs'

const Info: FC = () => {
  return (
    <div className="info section">
      <div className="infoContainer container">
        <div className="titleDiv flex">
          <h2>Travel to make memories all around the world</h2>
          <button className="btn">View All</button>
        </div>
        <div className="cardsDiv grid">
          <div className="singleCard div">
            <div className="iconDiv flex colorTwo">
              <RxCalendar className="icon" />
            </div>
            <div className="cardTitle">Book & Relax</div>
            <p>
              You can also call airlines from your phone and book a flight
              ticket!
            </p>
          </div>
          <div className="singleCard div">
            <div className="iconDiv flex colorOne">
              <RxCalendar className="icon" />
            </div>
            <div className="cardTitle">Smart Checklist</div>
            <p>
              You can also call airlines from your phone and book a flight
              ticket!
            </p>
          </div>
          <div className="singleCard div">
            <div className="iconDiv flex colorTwo">
              <BsBookmarkCheck className="icon" />
            </div>
            <div className="cardTitle">Save More</div>
            <p>
              You can also call airlines from your phone and book a flight
              ticket!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info
