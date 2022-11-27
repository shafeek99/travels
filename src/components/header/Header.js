import React from 'react'
import './Header.css'
import{AiOutlineSearch }from 'react-icons/ai'
import video from '../../assets/maldive.mp4'
const Header = () => {
  return (
    <div className='header'>
    <video autoPlay loop muted id='video'>
        <source src={video} type='video/mp4' />
    </video>
    <div className="overlay"></div>
    <div className="content">
        <h1>First Class Travel</h1>
        <h2>Top 1% Locations Worldwide</h2>
        <form className="form">
            <div>
                <input type="text" placeholder='Search Destinations' />
            </div>
            <div>
                <button><AiOutlineSearch className='icon'/></button>
            </div>
        </form>
    </div>
</div>
  )
}

export default Header