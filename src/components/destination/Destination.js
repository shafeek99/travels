import React from 'react'
import './Destination.css'
import Beach1 from '../../assets/beach1.jpg'
import Beach2 from '../../assets/beach2.jpg'
import Maldive from '../../assets/maldive.jpg'
import Maldive2 from '../../assets/maldive2.jpg'
import Maldive3 from '../../assets/maldive3.jpg'


export const Destination = () => {
  return (
    <div name='destinations' className='destination '>
        <div className="container">
            <h1>All-Iclusive Resorts</h1>
            <p>On The Caribbean's Best Beaches</p>
            <div className="img-container">
                <img className='span3 img-grid-row-2' src={Beach1} alt="/" />
                <img src={Beach2} alt="/" />
                 <img src={Maldive} alt="/" />
                 <img src={Maldive2} alt="/" />  
                  <img src={Maldive3} alt="/" />
        </div>
    </div>
    </div>
  )

}
