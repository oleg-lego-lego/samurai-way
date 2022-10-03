import {ActionsTypes, DialogsPageType,} from "./store";

const SEND_MESSAGE = 'SEND_MESSAGE';

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
}

export const dialogsReducer = (state: DialogsPageType = initialStore, action: ActionsTypes) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody
            return {
                ...state,
                messages: [...state.messages, {id: '6', message: body}]
            }
        default:
            return state
    }
}

export const sendMessageActionCreator = (newMessageBody: string) => {
    return {type: 'SEND_MESSAGE', newMessageBody} as const
}