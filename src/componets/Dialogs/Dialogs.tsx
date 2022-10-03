import React, {ChangeEvent, FC} from 'react';
import s from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {DialogsPageType} from "../../redux/store";
import {Field, InjectedFormProps, reduxForm} from "redux-form";


type StateDialogsProps = {
    dialogsPage: DialogsPageType
    updateNewMessageBody: (body: string) => void
    sendMessage: (newMessageBody: string) => void
}

export const Dialogs = (props: StateDialogsProps) => {

    let dialogsElements = props.dialogsPage.dialogs.map((d) => <DialogItem name={d.name} key={d.id} id={d.id}/>)
    let messagesElements = props.dialogsPage.messages.map((m) => <Message message={m.message} key={m.id}/>)
    let newMessageBody = props.dialogsPage.newMessageBody

    // let onSendMessageClick = () => {
    //     props.sendMessage()
    // }

    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value
        props.updateNewMessageBody(body)
    }

    let addNewMessage = (value: any) => {
        props.sendMessage(value.newMessageBody)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <AddMessageFormRedux onSubmit={addNewMessage}/>
                </div>
            </div>
        </div>
    )
}

const AddMessageForm: FC<InjectedFormProps<any>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'textarea'} name={'newMessageBody'} placeholder={'Enter your message'}/>
                <div>
                    <button>Send</button>
                </div>
            </div>
        </form>

    )
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)