import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import UserIcon from '../../images/user.svg';
import ChartIcon from '../../images/bar-chart.svg';
import AddIcon from '../../images/add.svg';
import { history } from '../routers/AppRouter';
import { isHeaderOrNavNeeded } from '../utils/isHeaderAndNavNeeded';

const Navigation = () => {
    const [isNavNeeded, setIsNavNeeded] = useState(false);

    useEffect(() => {
        setIsNavNeeded(isHeaderOrNavNeeded(history.location.pathname));

        return history.listen((location, action) => {
            setIsNavNeeded(isHeaderOrNavNeeded(location.pathname));
        });
    }, []);

    return isNavNeeded && (
        <nav className='nav-container container'>
            <NavLink to='/user' className='nav-element'>
                <img src={UserIcon} className='icon icon--light' />
            </NavLink>
            <NavLink to='/charts' className='nav-element'>
                <img src={ChartIcon} className='icon icon--light' />
            </NavLink>
            <NavLink to='/add' className='nav-element'>
                <img src={AddIcon} className='icon icon--light' />
            </NavLink>
        </nav>
    );
}

export default Navigation;