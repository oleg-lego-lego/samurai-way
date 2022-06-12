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
}

export type StatePropsType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export type ActionsTypes = AddPostActionType | ChangeNewTextType

export type AddPostActionType = {
    type: 'ADD-POST'
}

export type ChangeNewTextType = {
    type: 'CHANGE-NEW-TEXT'
    newText: string
}

export type  StoreType = {
    _state: StatePropsType
    // changeNewText: (newText: string) => void
    // addPost: () => void
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
        if (action.type === 'ADD-POST') {
            const newPost: PostsPropsType = {
                id: new Date().getTime(),
                message: this._state.profilePage.newPostText,
                likesCount: '0'
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._onChange()
        } else if (action.type === 'CHANGE-NEW-TEXT') {
            this._state.profilePage.newPostText = action.newText
            this._onChange()
        }
    }
}

export default store

