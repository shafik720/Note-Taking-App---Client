import React from 'react';
import addIcon from '../../../Utilities/img/plus.png';
import './NotepadContent.css';

const NotepadContent = () => {
    return (
        <div>
            <div className="add-button">
                <img src={addIcon} alt="" />
                <p>Add a Note</p>
            </div>
        </div>
    );
};

export default NotepadContent;