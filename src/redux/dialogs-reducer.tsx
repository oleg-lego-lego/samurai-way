import {ActionsTypes, DialogsPageType,} from "./state";

const CHANGE_NEW_MESSAGE_BODY = 'CHANGE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

export type changeNewMessageBodyType = ReturnType<typeof updateNewMessageBodyActionCreator>
export type sendMessageType = ReturnType<typeof sendMessageActionCreator>

export const dialogsReducer = (state: DialogsPageType, action: ActionsTypes) => {
    switch (action.type) {
        case CHANGE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body
            return state
        case SEND_MESSAGE:
            let body = state.newMessageBody
            state.newMessageBody = ''
            state.messages.push({id: '6', message: body},)
            return state
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