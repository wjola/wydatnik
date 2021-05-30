import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import SignInput from './SignInput';

const SignUpPage = () => {
    const history = useHistory();
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');

    const onClick = (e) => {
        e.preventDefault();

        history.push('/');
    }

    return (<div className='login__body'>
        <form className='login__form'>
            <h2 className='login__header'>Rejestracja</h2>
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
            <SignInput
                password
                id='passwordRepeat'
                setValueFromInput={setPasswordRepeat}
                label='Potwórz hasło'
                value={passwordRepeat}
            />
            <button
                className='button button--light login__button'
                onClick={onClick}
            >
                Zarejestruj
            </button>
        </form>
    </div>)
}

export default SignUpPage;