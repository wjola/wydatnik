import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import EyeIcon from '../../images/eye.svg';

const SignUpPage = () => {
    const history = useHistory();
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');

    const onClick = (e) => {
        e.preventDefault();

        history.push('/');
    }

    const switchPasswordView = (e) => {
        e.preventDefault();

        const targetInput = e.currentTarget.parentElement.childNodes[0];
        if (targetInput.getAttribute('type') === 'password') {
            targetInput.setAttribute('type', 'text');
        } else {
            targetInput.setAttribute('type', 'password');
        }
        targetInput.focus();
    }

    return (<div className='login__body'>
        <form className='login__form'>
            <h2 className='login__header'>Rejestracja</h2>
            <fieldset  className='input-container'>
                <input
                    className='login__input input'
                    id='login'
                    type='text'
                    value={login}
                    placeholder=' '
                    onChange={e => setLogin(e.target.value)}
                />
                <label htmlFor='login' className='login__label'>
                    Login
                </label>
            </fieldset>
            <fieldset className='input-container'>
                <input
                    className='login__input input'
                    id='password'
                    type='password'
                    value={password}
                    placeholder=' '
                    onChange={e => setPassword(e.target.value)}
                />
                <label htmlFor='password' className='login__label'>
                    Hasło
                </label>
                <button
                    className='password__icon'
                    disabled={!(password)}
                    onClick={switchPasswordView}
                >
                    <img src={EyeIcon} className='icon' />
                </button>
            </fieldset>
            <fieldset  className='input-container'>
                <input
                    className='login__input input'
                    id='passwordRepeat'
                    type='password'
                    placeholder=' '
                    value={passwordRepeat}
                    onChange={e => setPasswordRepeat(e.target.value)}
                />
                <label htmlFor='passwordRepeat' className='login__label'>
                    Powtórz hasło
                </label>
                <button
                    className='password__icon'
                    disabled={!(passwordRepeat)}
                    onClick={switchPasswordView}
                >
                    <img src={EyeIcon} className='icon' />
                </button>
            </fieldset>
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