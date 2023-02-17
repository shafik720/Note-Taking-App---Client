import React from 'react';
import './Header.css';
import profileLogo from '../../Utilities/img/profile.png'

const Header = () => {
    // this function will open a popup menu when user click the profile icon on top right corner
    const openProfileMenu = () =>{
        document.querySelector('.profile-submenu').classList.add('active');
    }
    return (
        <div className="header-one-div">
            <div onClick={openProfileMenu} draggable className="profile-section">
                <img src={profileLogo} alt="" />

                <div className="profile-submenu">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore doloremque officiis assumenda repellat sunt? Aperiam magni sequi deleniti a possimus.</p>
            </div>
            </div>
            
        </div>
    );
};

export default Header;