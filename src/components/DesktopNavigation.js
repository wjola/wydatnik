import React from 'react';
import { NavLink } from 'react-router-dom';
import UserIcon from '../../images/user.svg';
import ChartIcon from '../../images/bar-chart.svg';
import AddIcon from '../../images/add.svg';

const DesktopNavigation = () => {
    return (
        <nav className='nav-container--desktop'>
            <NavLink to='/user' className='nav-element nav-element--withText'>
                <img src={UserIcon} className='icon icon--light' />
                <p className='nav-element__text'>Moje dane</p>
            </NavLink>
            <NavLink to='/charts' className='nav-element nav-element--withText'>
                <img src={ChartIcon} className='icon icon--light' />
                <p className='nav-element__text'>Analizuj wydatki</p>
            </NavLink>
            <NavLink to='/add' className='nav-element nav-element--withText'>
                <img src={AddIcon} className='icon icon--light' />
                <p className='nav-element__text'>Dodaj wydatek</p>
            </NavLink>
        </nav>
    );
}

export default DesktopNavigation;