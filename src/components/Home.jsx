import React from 'react'
import "../styles/Home.css";
const Home = () => {
  return (
    <div className='main'>
            <div className='main-container'>
              <div style={{ gridTemplateRows: "60% auto" }}>
              </div>
            <div className='section' style={{ gridTemplateRows: "60% auto" }}>

                <div className='header'>
                  <h1>lælkfsældf</h1>
                  <h2>heyyo </h2>
                </div>

                <div className='content' style={{ gridTemplateRows: "60% auto" }}>
                  {<button className='btn-lightpurple' style={{ maxWidth: "200px" }} /* onClick={}*/>botton</button> }
                  <button className='btn-purple' style={{ maxWidth: "200px" }} /* onClick={}*/>botton</button>
                </div>
            </div>
          </div>
    </div>
  )
}

export default Home
