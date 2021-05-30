import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import SignInput from './SignInput';

const SignInPage = () => {
    const history = useHistory();
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const onClick = (e) => {
        e.preventDefault();

        history.push('/');
    }

    return (<div className='login__body'>
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

export default SignInPage;