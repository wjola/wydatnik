import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import PigLogo from '../../images/piggy-bank-no-outline.svg';
import useDeviceClass from '../utils/useDeviceClass';
import DesktopNavigation from './DesktopNavigation';
import { history } from '../routers/AppRouter';
import { isHeaderOrNavNeeded } from '../utils/isHeaderAndNavNeeded';

const Header = () => {
    const [isHeaderNeeded, setIsHeaderNeeded] = useState(false);
    const isDesktop = useDeviceClass() === 'desktop';
    
    useEffect(() => {
        setIsHeaderNeeded(isHeaderOrNavNeeded(history.location.pathname));

        return history.listen((location, action) => {
            setIsHeaderNeeded(isHeaderOrNavNeeded(location.pathname));
        });
    }, []);

    return isHeaderNeeded && (
        <div className='header-container'>
            <header className='header'>
                <NavLink to='/' className='header__logo'>
                    <img src={PigLogo} className='logo__pig logo__pig--small'/>
                    <h1 className='title'>Kosztopis</h1>
                </NavLink>
                {isDesktop && <DesktopNavigation />}
            </header>
        </div>       
    );
}

export default Header;