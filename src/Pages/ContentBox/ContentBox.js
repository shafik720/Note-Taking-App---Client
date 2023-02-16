import React from 'react';
import './ContentBox.css';
import NotepadContent from './NotepadContent/NotepadContent';

const ContentBox = () => {
    return (
        <div className="content-box">
            <NotepadContent></NotepadContent>
        </div>
    );
};

export default ContentBox;