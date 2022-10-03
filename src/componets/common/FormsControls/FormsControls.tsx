import React from 'react';
import {WrappedFieldProps} from "redux-form";


export const Textarea: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, children, ...restProps} = props

    return (
        <div>
            <textarea {...input} {...props}/>
        </div>
    )
}