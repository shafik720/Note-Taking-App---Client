import React from 'react';
import addIcon from '../../../Utilities/img/plus.png';
import './NotepadContent.css';

const NotepadContent = () => {
    const addNote = () =>{
        // opening popup display
        document.querySelector('.popup-parent').classList.add('active', 'activeNotepad');
    }
    return (
        <div className='notepad-div'>
    {/* ------------------ option menu starts here --------------- */}
            <div className="add-button d-none">
                <img src={addIcon} alt="" />
                <p>Add a Note</p>
            </div>
            <div className="sub-menu-div" draggable>
                <div onClick={addNote} className="submenu-icon add-icon-sub">
                    <img src={addIcon} alt="" />
                    <p>Add a Note</p>
                </div>
            </div>
    {/* ------------------ option menu ends here --------------- */}

            <div className="note-display">
                <div className="note-header">
                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing </h2>
                </div>
                <div className="note-body">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea nemo id voluptates, numquam earum corporis aliquam doloribus porro blanditiis delectus?</p>
                </div>
            </div>
        </div>
    );
};

export default NotepadContent;