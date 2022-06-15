import React from 'react';
import {ActionsTypes} from "../../redux/store";
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {RootStoreType} from "../../redux/redux-store";

type StateDialogsProps = {
    store: RootStoreType
    dispatch: (action: ActionsTypes) => void
}

export const DialogsContainer = (props: StateDialogsProps) => {
    let state = props.store.dialogsPage

    let onSendMessageClick = () => {
        props.dispatch(sendMessageActionCreator())
    }

    let onNewMessageChange = (body: string) => {
        props.dispatch(updateNewMessageBodyActionCreator(body))
    }

    return (
        <Dialogs dialogsPage={state} updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick}/>
    )
}