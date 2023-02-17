import React, { useState } from 'react';
import PopupForLogin from './PopupForLogin/PopupForLogin';
import './PopupNotepad.css';

import PopupOnlyNote from './PopupOnlyNote/PopupOnlyNote';


const PopupNotepad = () => {

    return (
        <div className='popup-parent'>
            <div className="popup-modal">
                
        {/* --------------------- Popup for adding note -------------------------- */}
                <div className="notepad-content">
                    <PopupOnlyNote></PopupOnlyNote>
                </div>
                <div className="notepad-login">
                    <PopupForLogin></PopupForLogin>
                </div>
            </div>
        </div>
    );
};

export default PopupNotepad;