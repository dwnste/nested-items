import React from 'react';
import './styles.css';

const Button = ({
    icon,
    title,
    onClick,
}) => <div className="Button" onClick={ onClick }>
    <img src={ icon } alt={ title } />
</div>;

export default Button;
