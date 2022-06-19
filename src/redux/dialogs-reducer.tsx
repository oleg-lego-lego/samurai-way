import {ActionsTypes, DialogsPageType,} from "./store";

const CHANGE_NEW_MESSAGE_BODY = 'CHANGE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

export type changeNewMessageBodyType = ReturnType<typeof updateNewMessageBodyActionCreator>
export type sendMessageType = ReturnType<typeof sendMessageActionCreator>

let initialStore = {
    dialogs: [
        {id: '1', name: 'Oleg'},
        {id: '2', name: 'Andrew'},
        {id: '3', name: 'Svetlana'},
        {id: '4', name: 'Sasha'},
        {id: '5', name: 'Viktor'},
        {id: '6', name: 'Valera'},
    ],
    messages: [
        {id: '1', message: 'Hi'},
        {id: '2', message: 'How are you'},
        {id: '3', message: 'yo'},
        {id: '4', message: 'yo'},
        {id: '5', message: 'Hi'},
    ],
    newMessageBody: '',
}

export const dialogsReducer = (state: DialogsPageType = initialStore, action: ActionsTypes) => {
    switch (action.type) {
        case CHANGE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            }
        case SEND_MESSAGE:
            let body = state.newMessageBody
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: '6', message: body}]
            }
        default:
            return state
    }
}


export const updateNewMessageBodyActionCreator = (body: string) => {
    return {
        type: 'CHANGE_NEW_MESSAGE_BODY',
        body: body
    } as const
}

export const sendMessageActionCreator = () => {
    return {
        type: 'SEND_MESSAGE',
    } as const
}