import React from 'react';
import { connect } from 'react-redux';
import { signOutAsync } from '../actions/auth';
import Header from './Header';

const UserPage = ({ signOut }) => {

    const onClick = (e) => {
        e.preventDefault();
        signOut();
    }

    return (<>
        <Header />
        <div className='subpage__body container'>
            <h2 className='subpage__header'>Dodaj wydatek:</h2>
            <button
                className='button button--dark'
                onClick={onClick}
            >
                Wyloguj
            </button>
        </div>
    </>);
}

const mapDispatchToProps = (dispatch) => ({
    signOut: () => dispatch(signOutAsync())
});

export default connect(undefined, mapDispatchToProps)(UserPage);