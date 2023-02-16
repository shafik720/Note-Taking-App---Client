import React from 'react';
import './SideHeader.css';
import noteLogo from '../../utilities/img/notes.png';
import todoLogo from '../../utilities/img/to-do (1).png';
import watchLogo from '../../utilities/img/stopwatch.png';
import currencyLogo from '../../utilities/img/money-exchange.png';

const SideHeader = () => {
    return (
        <div className="side-header-div">
            <div className="side-header-logo">
                <img src={noteLogo} alt="" />
            </div>
            <div className="side-header-logo">
                <img src={todoLogo} alt="" />
            </div>
            <div className="side-header-logo">
                <img src={watchLogo} alt="" />
            </div>
            <div className="side-header-logo">
                <img className='currency-logo' src={currencyLogo} alt="" />
            </div>
        </div>
    );
};

export default SideHeader;