import { forwardRef, useEffect, useRef } from 'react';

export default function FileInput( { type = 'file', name, id, className, required, handleChange }) {

    return (
        <div className="flex flex-col items-start">
            <input
                type={type}
                name={name}
                id={id}
                className={
                    `border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm ` +
                    className
                }
                required={required}
                onChange={(e) => handleChange(e)}
            />
        </div>
    )
}
