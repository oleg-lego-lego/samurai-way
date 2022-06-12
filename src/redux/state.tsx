const ADD_POST = 'ADD-POST';
const CHANGE_NEW_TEXT = 'CHANGE-NEW-TEXT';
const CHANGE_NEW_MESSAGE_BODY = 'CHANGE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';


type MessagesPropsType = {
    id: string
    message: string
}

type DialogsPropsType = {
    id: string
    name: string
}

type PostsPropsType = {
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

}

export type ActionsTypes = AddPostActionType | ChangeNewTextType | changeNewMessageBodyType | sendMessageType

type AddPostActionType = ReturnType<typeof addPostActionCreator>
type ChangeNewTextType = ReturnType<typeof updateNewPostTextActionCreator>
type changeNewMessageBodyType = ReturnType<typeof updateNewMessageBodyActionCreator>
type sendMessageType = ReturnType<typeof sendMessageActionCreator>


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
                {id: '1', name: 'Dimych'},
                {id: '2', name: 'Andrew'},
                {id: '3', name: 'Sveta'},
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
        // sitebar: {
        //
        // }
    },
    // changeNewText(newText: string) {
    //     this._state.profilePage.newPostText = newText
    //     this._onChange()
    // },
    // addPost() {
    //     const newPost: PostsPropsType = {
    //         id: new Date().getTime(),
    //         message: this._state.profilePage.newPostText,
    //         likesCount: '0'
    //     }
    //     this._state.profilePage.posts.push(newPost)
    //     this._state.profilePage.newPostText = ''
    //     this._onChange()
    // },
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
        if (action.type === ADD_POST) {
            const newPost: PostsPropsType = {
                id: new Date().getTime(),
                message: this._state.profilePage.newPostText,
                likesCount: '0'
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._onChange()
        } else if (action.type === CHANGE_NEW_TEXT) {
            this._state.profilePage.newPostText = action.newText
            this._onChange()
        } else if (action.type === CHANGE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body
            this._onChange()
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody
            this._state.dialogsPage.newMessageBody = ''
            this._state.dialogsPage.messages.push({id: '6', message: body},)
            this._onChange()
        }
    }
}

export const addPostActionCreator = () => {
    return {
        type: "ADD-POST"
    } as const
}

export const updateNewPostTextActionCreator = (newText: string) => {
    return {
        type: "CHANGE-NEW-TEXT",
        newText: newText
    } as const
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

export default store

