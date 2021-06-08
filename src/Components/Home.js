import React from 'react';
import './Home.css';
import facebook from './facebook.png'
import instagram from './instagram.png'
import twitter from './twitter.png'
import one from './one.jpg'

function Home() {
    return (
        <div className="Home">
            <div className="input">
                <input type="text" placeholder="Enter Email"/>
                <button className="button">Subscribe</button>
            </div>
            <div className="social">
                <img src={facebook} alt="facebook"/>
                <img src={instagram} alt="facebook" />
                <img src={twitter} alt="facebook" />
            </div>
            <div>
                <img src={one} alt="logo" className="home_img"/>
            </div>
        </div>
    )
}

export default Home
