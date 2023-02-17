import React from 'react';
import './ContentBox.css';
import NotepadContent from './NotepadContent/NotepadContent';
import { Route, Routes } from 'react-router';
import ErrorPage from '../ErrorPage/ErrorPage';
import Signup from '../Authentication/Signup/Signup'


const ContentBox = () => {
    return (
        <div className="content-box">
            <Routes>
                <Route path='/' element={<NotepadContent></NotepadContent>} ></Route>
                <Route path='/signup' element={<Signup></Signup>} ></Route>
                <Route path='*' element={<ErrorPage></ErrorPage>}></Route>
            </Routes>
        </div>
    );
};

export default ContentBox;