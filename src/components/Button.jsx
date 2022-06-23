import React from 'react';
import './button.css'



// eslint-disable-next-line import/no-anonymous-default-export
export default props =>
    <button className={`
        button
        ${props.operation  ? 'operation' : ''}
        ${props.double ? 'double' : ''}
        ${props.triple ? 'triple' : ''}`
}>
    {props.label}
</button>
