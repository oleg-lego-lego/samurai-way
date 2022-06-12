import React from 'react';
import s from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {DialogsPageType, ProfilePageType} from "../../redux/state";

type StateDialogsProps = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export const Dialogs = (props: StateDialogsProps) => {

    let dialogsElements = props.dialogsPage.dialogs.map((d) => <DialogItem name={d.name} id={d.id}/>)

    let messagesElements = props.dialogsPage.messages.map((m) => <Message message={m.message}/>)


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}