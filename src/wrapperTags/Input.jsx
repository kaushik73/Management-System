import React from 'react';

const Input = ({ type = 'text', placeholder, name, value, onChange, className = 'px-4 py-3 w-96 rounded-lg shadow-md focus:outline-none' }) => {
    return (
        <div>
            <input
                type={type}
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange}
                className={className}
            />
        </div>
    );
};

export default Input;