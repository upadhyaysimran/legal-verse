import React from 'react';
import './input.scss';
function Input_5(props) {
    return (
        <div className="Input">
            <label htmlFor={props.inp.id}>{props.inp.label}</label>
            {props.inp.type === 'select' ? (
                <select
                    value={props.inp.value}
                    id={props.inp.id}
                    onChange={props.inp.onChange}
                    name={props.inp.id}
                >
                    {props.inp.options.map((option, index) => (
                        <option key={index} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            ) : (
                <input
                    type={props.inp.type}
                    value={props.inp.value}
                    id={props.inp.id}
                    onChange={props.inp.onChange}
                    name={props.inp.id}
                />
            )}
        </div>
    );
}

export default Input_5;
