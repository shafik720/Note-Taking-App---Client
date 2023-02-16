import React from 'react';
import './Header.css';
import profileLogo from '../../utilities/img/profile.png'

const Header = () => {
    return (
        <div className="header-one-div">
            <div className="profile-section">
                <img src={profileLogo} alt="" />
            </div>
        </div>
    );
};

export default Header;