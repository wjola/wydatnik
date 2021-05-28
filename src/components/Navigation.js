import React from 'react';
import { NavLink } from 'react-router-dom';
import UserIcon from '../../images/user.svg';
import ChartIcon from '../../images/bar-chart.svg';
import AddIcon from '../../images/add.svg';

const Navigation = () => {
    return (
        <nav className='nav-container'>
            <NavLink to='/' className='nav-element'>
                <img src={UserIcon} className='icon icon--light' />
            </NavLink>
            <NavLink to='/' className='nav-element'>
                <img src={ChartIcon} className='icon icon--light' />
            </NavLink>
            <NavLink to='/add' className='nav-element'>
                <img src={AddIcon} className='icon icon--light' />
            </NavLink>
        </nav>
    );
}

export default Navigation;