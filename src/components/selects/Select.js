import React from 'react'
import './SelectStyle.css'  

import Beach1 from '../../assets/beach1.jpg'
import Beach2 from '../../assets/beach2.jpg'
import Maldive from '../../assets/maldive.jpg'
import Maldive2 from '../../assets/maldive2.jpg'
import Maldive3 from '../../assets/maldive3.jpg'
import BoraBora from '../../assets/borabora.jpg'

import Selectsimg from '../Selectsimg/Selectsimg'
const Select = () => {
  return (
    
          <div name='views' className='selects'>
              <div className="container">
            <Selectsimg  bgImg={BoraBora} text='Bora Bora' />
        <Selectsimg  bgImg={Beach1} text='Maldives' />
        <Selectsimg  bgImg={Beach2} text='Key West' />
        <Selectsimg  bgImg={Maldive} text='Grenada' />
        <Selectsimg  bgImg={Maldive2} text='Barbados' />
        <Selectsimg  bgImg={Maldive3} text='Emerald Bay' />
            
        </div>
        </div>
  )
}

export default Select