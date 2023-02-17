import React from 'react';
import './PopupForLogin.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMultiply } from '@fortawesome/free-solid-svg-icons';

const PopupForLogin = () => {
    // closing 'Add Note' popup display
    const closePopup = () => {
        document.querySelector('.popup-parent').classList.remove('active', 'activeLogin');
    }
    return (
        <div>
            <h2>Login</h2>
            {/* ------------------- Popup Close Button --------------------- */}
            <div className="popup-close-button">
                <span draggable onClick={closePopup}><FontAwesomeIcon icon={faMultiply} />
                </span>
            </div>
        </div>
    );
};

export default PopupForLogin;