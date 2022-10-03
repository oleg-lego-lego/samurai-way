import React from 'react';
import {WrappedFieldProps} from "redux-form";
import s from './FormsControls.module.css';


export const Textarea: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, children, ...restProps} = props

    const hasError = meta.touched && meta.error


    return (
        <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
            <div>
                <textarea {...input} {...props}/>
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}