import React from 'react';
import './SideHeader.css';
import noteLogo from '../../Utilities/img/notes.png';
import todoLogo from '../../Utilities/img/to-do (1).png';
import watchLogo from '../../Utilities/img/stopwatch.png';
import currencyLogo from '../../Utilities/img/money-exchange.png';
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';

const SideHeader = () => {
    // tooltip to show detail on hover

    // tooltip for notepad app
    const renderTooltip = props => (
        <Tooltip {...props}>Notepad</Tooltip>
    );
    // tooltip for todo app
    const renderTooltip2 = props => (
        <Tooltip {...props}>To-Do App</Tooltip>
    );
    // tooltip for stopwatch app
    const renderTooltip3 = props => (
        <Tooltip {...props}>StopWatch</Tooltip>
    );
    // tooltip for Currency Converter app
    const renderTooltip4 = props => (
        <Tooltip {...props}>Currency Converter</Tooltip>
    );
    return (
        <div className="side-header-div">

            {/*------------- Note pad logo ----------------- */}
            <OverlayTrigger
                placement="right"
                delay={{ show: 50, hide: 100 }}
                overlay={renderTooltip}>
                <div className="side-header-logo">
                    <img src={noteLogo} alt="" />
                </div>
            </OverlayTrigger>

            {/*------------- Todo app logo ----------------- */}
            <OverlayTrigger
                placement="right"
                delay={{ show: 50, hide: 100 }}
                overlay={renderTooltip2}>
                <div className="side-header-logo">
                    <img src={todoLogo} alt="" />
                </div>
            </OverlayTrigger>

            {/*------------- StopWatch logo ----------------- */}
            <OverlayTrigger
                placement="right"
                delay={{ show: 50, hide: 100 }}
                overlay={renderTooltip3}>
                <div className="side-header-logo">
                    <img src={watchLogo} alt="" />
                </div>
            </OverlayTrigger>

            {/*------------- Currency Converter logo ----------------- */}
            <OverlayTrigger
                placement="right"
                delay={{ show: 50, hide: 100 }}
                overlay={renderTooltip4}>
                <div className="side-header-logo">
                    <img className='currency-logo' src={currencyLogo} alt="" />
                </div>
            </OverlayTrigger>


        </div>
    );
};

export default SideHeader;