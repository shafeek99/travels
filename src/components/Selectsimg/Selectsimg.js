import React from 'react'
import './Selectsimg.css'

const Selectsimg = ({bgImg, text}) => {
  return (
    <div className='selects-location '>
    <img src={bgImg} />
    <div className="overlay">
                <p>{text}</p>
            </div>
</div>
)
}
 
export default Selectsimg