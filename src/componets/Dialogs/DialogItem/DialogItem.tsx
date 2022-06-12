import React from 'react';
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";


type DialogItemProps = {
    name: string
    id: string
}

export const DialogItem = (props: DialogItemProps) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}

