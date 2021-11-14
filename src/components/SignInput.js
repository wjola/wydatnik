import React from "react";
import EyeIcon from "../../images/eye.svg";

const SignInput = ({
  id,
  password = false,
  value = "",
  label,
  alert = "",
  setAlert = {},
  ...rest
}) => {
  const switchPasswordView = (e) => {
    e.preventDefault();

    const targetInput = e.currentTarget.parentElement.childNodes[0];
    if (targetInput.getAttribute("type") === "password") {
      targetInput.setAttribute("type", "text");
    } else {
      targetInput.setAttribute("type", "password");
    }
    targetInput.focus();
  };

  return (
    <fieldset className="input-container">
      <input
        className="login__input input"
        id={id}
        type={password ? "password" : "text"}
        value={value}
        placeholder=" "
        onChange={(e) => {
          if (alert.length > 0 && value.length > 0) {
            setAlert("");
          }
          rest.setValueFromInput(e.target.value);
        }}
      />
      <label htmlFor={id} className="login__label">
        {label}
      </label>
      {password && (
        <button
          className="password__icon"
          disabled={!value}
          onClick={switchPasswordView}
        >
          <img src={EyeIcon} className="icon" />
        </button>
      )}
      {alert.length > 0 && <p className="sign__alert">{alert}</p>}
    </fieldset>
  );
};

export default SignInput;
