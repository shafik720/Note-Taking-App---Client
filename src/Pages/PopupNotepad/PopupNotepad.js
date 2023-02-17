import React, { useState } from 'react';
import './PopupNotepad.css';

import PopupOnlyNote from './PopupOnlyNote/PopupOnlyNote';


const PopupNotepad = () => {
    const[resetForm, setResetForm] = useState(false);


    return (
        <div className='popup-parent'>
            <div className="popup-modal">
                
                <div className="notepad-content">
                    <PopupOnlyNote></PopupOnlyNote>
                </div>
            </div>
        </div>
    );
};

export default PopupNotepad;