import React from 'react';
import { connect } from 'react-redux';
import { signOutAsync } from '../actions/auth';
import Header from './Header';

const UserPage = ({ signOut, user }) => {

    const onClick = (e) => {
        e.preventDefault();
        signOut();
    }

    return (<>
        <Header />
        <div className='subpage__body container'>
            <h2 className='subpage__header'>Zalogowany użytkownik:</h2>
            <div className='user-data'>
                {user && <img src={user.photoURL} />}
                {user && <p>{user.displayName}</p>}
                {user && <p>{user.email}</p>}
            </div>
            <button
                className='button button--dark'
                onClick={onClick}
            >
                Wyloguj
            </button>
        </div>
    </>);
}

const mapStateToProps = (state) => ({
    user: state.user
});

const mapDispatchToProps = (dispatch) => ({
    signOut: () => dispatch(signOutAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);