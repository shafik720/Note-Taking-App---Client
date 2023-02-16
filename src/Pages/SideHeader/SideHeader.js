import React from 'react';
import './SideHeader.css';
import noteLogo from '../../utilities/img/notes.png';
import todoLogo from '../../utilities/img/to-do (1).png';
import watchLogo from '../../utilities/img/stopwatch.png';
import currencyLogo from '../../utilities/img/money-exchange.png';
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';

const SideHeader = () => {
    // tooltip to show detail on hover
    const renderTooltip = props => (
        <Tooltip {...props}>Notepad</Tooltip>
    );
    return (
        <div className="side-header-div">
            
            <OverlayTrigger
                placement="right"
                delay={{ show: 50, hide: 100 }}
                overlay={renderTooltip}>
                <div className="side-header-logo">
                <img src={noteLogo} alt="" />
            </div>
            </OverlayTrigger>
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