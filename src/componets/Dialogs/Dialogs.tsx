import React, {FC} from 'react';
import s from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {DialogsPageType} from "../../redux/store";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

type StateDialogsProps = {
    dialogsPage: DialogsPageType
    sendMessage: (newMessageBody: string) => void
}

type FormDataType = {
    newMessageBody: string
}

const maxLength = maxLengthCreator(50)

export const Dialogs = (props: StateDialogsProps) => {

    let dialogsElements = props.dialogsPage.dialogs.map((d) => <DialogItem name={d.name} key={d.id} id={d.id}/>)
    let messagesElements = props.dialogsPage.messages.map((m) => <Message message={m.message} key={m.id}/>)

    let addNewMessage = (value: FormDataType) => {
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

const AddMessageForm: FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       name={'newMessageBody'}
                       validate={[required, maxLength]}
                       placeholder={'Enter your message'}/>
                <div>
                    <button>Send</button>
                </div>
            </div>
        </form>

    )
}

const AddMessageFormRedux = reduxForm<FormDataType>({form: 'dialogAddMessageForm'})(AddMessageForm)