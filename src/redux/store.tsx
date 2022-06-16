import {AddPostActionType, ChangeNewTextType, profileReducer} from "./profile-reducer";
import {changeNewMessageBodyType, dialogsReducer, sendMessageType} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";

type MessagesPropsType = {
    id: string
    message: string
}

export type DialogsPropsType = {
    id: string
    name: string
}

export type PostsPropsType = {
    id: number
    message: string
    likesCount: string
}

export type ProfilePageType = {
    newPostText: string
    posts: Array<PostsPropsType>
}

export type DialogsPageType = {
    dialogs: Array<DialogsPropsType>
    messages: Array<MessagesPropsType>
    newMessageBody: string
}

export type StatePropsType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: any
}

export type ActionsTypes = AddPostActionType | ChangeNewTextType | changeNewMessageBodyType | sendMessageType

export type  StoreType = {
    _state: StatePropsType
    _onChange: () => void
    subscribe: (callback: () => void) => void
    getState: () => StatePropsType
    dispatch: (action: ActionsTypes) => void
}

const store: StoreType = {
    _state: {
        profilePage: {
            newPostText: '',
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: '12'},
                {id: 2, message: 'It is my first post', likesCount: '23'},
            ],
        },
        dialogsPage: {
            dialogs: [
                {id: '1', name: 'oleg'},
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
        },
        sidebar: {}
    },
    _onChange() {
        console.log('state was ...')
    },
    subscribe(callback) {
        this._onChange = callback
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._onChange()
    }
}

export default store

