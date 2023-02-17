import React from 'react';
import './Header.css';
import profileLogo from '../../Utilities/img/profile.png'
import { useNavigate } from 'react-router';

const Header = () => {
    // this function will open a popup menu when user click the profile icon on top right corner
    const openProfileMenu = () => {
        document.querySelector('.profile-submenu').classList.add('active');
    }
    // closing function for profile sub menu 
    document.body.addEventListener('click', (e) => {
        if (!e.target.classList.contains('profileIcon')) {
            document.querySelector('.profile-submenu').classList.remove('active');
        }
    })

    
    function jumpToLoginPage(){
        document.querySelector('.popup-parent').classList.add('active', 'activeLogin');
    }
    
    return (
        <div className="header-one-div">
            <div onClick={openProfileMenu} draggable className="profile-section">
                <img className="profileIcon" src={profileLogo} alt="" />

                {/* ------------------------ profile sub menu starts here --------------------------- */}
                <div className="profile-submenu">
                    <p> <span onClick={jumpToLoginPage}>Login</span> / <span>Sign-Up</span></p>
                    
                </div>
            </div>

        </div>
    );
};

export default Header;