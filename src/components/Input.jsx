import React from "react";
import "./Input.css";

const Input = ({
    inputName,
    inputLabel,
    inputType,
    inputValue,
    placeholder,
    handleInputChange,
    required,
}) => {
    return (
        <div className="input-container">
            <label htmlFor="input" className="input-label">
                {inputLabel}
            </label>
            <input
                className="input"
                name={inputName}
                type={inputType}
                value={inputValue}
                placeholder={placeholder}
                required={required}
                onChange={handleInputChange}
            />
        </div>
    );
};

export default Input;
