import React from 'react';
import addIcon from '../../../Utilities/img/plus.png';
import './NotepadContent.css';

const NotepadContent = () => {
    return (
        <div className='notepad-div'>
            <div className="add-button">
                <img src={addIcon} alt="" />
                <p>Add a Note</p>
            </div>
            <div className="sub-menu-div">
                <h2>Add your menu here</h2>
            </div>
        </div>
    );
};

export default NotepadContent;