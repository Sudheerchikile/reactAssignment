import React from 'react'
import PopulationComponent from '../PopulationComponent'
import CryptoComponent from '../CryptoComponent'
// import Sidebar from '../sidebar'

import "./index.css"

const Home = () => {
  return (
    <div className='home'>
     <PopulationComponent/>
    
     <CryptoComponent/>
    </div>
  )
}

export default Home
