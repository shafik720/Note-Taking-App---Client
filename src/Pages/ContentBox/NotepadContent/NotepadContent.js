import React from 'react';
import addIcon from '../../../Utilities/img/plus.png';
import './NotepadContent.css';

const NotepadContent = () => {
    return (
        <div className='notepad-div'>
            <div className="add-button d-none">
                <img src={addIcon} alt="" />
                <p>Add a Note</p>
            </div>
            <div className="sub-menu-div" draggable>
                <div className="submenu-icon add-icon-sub">
                    <img src={addIcon} alt="" />
                    <p>Add a Note</p>
                </div>
            </div>
        </div>
    );
};

export default NotepadContent;