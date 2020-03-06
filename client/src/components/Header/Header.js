import React from 'react';
import { Link } from 'react-router-dom';

// COMPONENTS
import GoogleAuth from '../GoogleAuth';

// STYLES
import './Header.scss';


const Header = () => {

    return (
        <div className="header-outer">
            <div className="ui secondary pointing menu">
                <Link to="/" className="item">Streamer</Link>

                <div className="right menu">
                    <Link to="/" className="item">All Streams</Link>
                    <GoogleAuth />
                </div>
            </div>
        </div>
    )
}

export default Header;