import React from 'react';

const Button = ({ 
    onClick, 
    className = "", 
    children = 'View all', 
    type = 'button', 
    size = 'medium', 
    ...props 
}) => {
    const getSizeClass = (size) => {
        switch(size) {
            case 'small':
                return 'bg-white text-indigo-800 py-2 px-4 rounded-md shadow hover:bg-gray-100';
            case 'medium':
                return 'py-2 px-4 text-base';
            case 'large':
                return 'py-3 px-6 text-lg';
            default:
                return 'py-2 px-4 text-base'; 
        }
    };

    return (
        <button 
            type={type} 
            onClick={onClick} 
            className={`custom-button ${getSizeClass(size)} ${className}`} 
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;