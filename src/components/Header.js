import React from 'react';
import PigLogo from '../../images/piggy-bank-no-outline.svg';
import useDeviceClass from '../utils/useDeviceClass';
import DesktopNavigation from './DesktopNavigation';

const Header = () => {
    const isDesktop = useDeviceClass() === 'desktop';
    return (
        <div className='header-container'>
            <header className='header'>
                <div className='header__logo'>
                    <img src={PigLogo} className='logo__pig logo__pig--small'/>
                    <h1 className='title'>Kosztopis</h1>
                </div>
                {isDesktop && <DesktopNavigation />}
            </header>
        </div>       
    );
}

export default Header;