import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import SignInput from './SignInput';
import PigLogo from '../../images/piggy-bank-no-outline.svg';
import { signInAsync } from '../actions/auth';

const SignInPage = ( { signIn } ) => {
    const history = useHistory();
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const onClick = (e) => {
        e.preventDefault();
        signIn();
    }

    return (<div className='login__body'>
        <img src={PigLogo} className='logo__pig logo__pig--medium'/>
        <form className='login__form'>
            <h2 className='login__header'>Logowanie</h2>
            <SignInput
                id='login'
                setValueFromInput={setLogin}
                label='Login'
                value={login}
            />
            <SignInput
                password
                id='password'
                setValueFromInput={setPassword}
                label='Hasło'
                value={password}
            />
            <button
                className='button button--light login__button'
                onClick={onClick}
            >
                Zaloguj
            </button>
        </form>
    </div>)
}

const mapDispatchToProps = (dispatch) => ({
    signIn: () => dispatch(signInAsync())
});

export default connect(undefined, mapDispatchToProps)(SignInPage);