import React from 'react';
import './Header.scss'
import TwitterLogo from '../../assets/images/twitter-logo.png'

export default function Header() {
    return (
        <div className='header' >
            <img src={TwitterLogo} alt="Tweets Simulator" />
            <h1>Tweets simulator</h1>
        </div>
    )
}