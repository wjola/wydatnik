import React from 'react';
import EyeIcon from '../../images/eye.svg';

const SignInput = ({ id, password= false, value= '', label, ...rest}) => {
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

    return (
        <fieldset className='input-container'>
            <input
                className='login__input input'
                id={id}
                type={password ? 'password' : 'text'}
                value={value}
                placeholder=' '
                onChange={e => rest.setValueFromInput(e.target.value)}
            />
            <label htmlFor={id} className='login__label'>
                {label}
            </label>
            {
                password &&
                <button
                    className='password__icon'
                    disabled={!value}
                    onClick={switchPasswordView}
                >
                    <img src={EyeIcon} className='icon' />
                </button>
            }
        </fieldset>
    );
}

export default SignInput;