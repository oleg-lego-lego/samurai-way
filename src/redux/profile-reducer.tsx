import {ActionsTypes, PostsPropsType, ProfilePageType,} from "./store";


const ADD_POST = 'ADD-POST';
const CHANGE_NEW_TEXT = 'CHANGE-NEW-TEXT';


export type AddPostActionType = ReturnType<typeof addPostActionCreator>
export type ChangeNewTextType = ReturnType<typeof updateNewPostTextActionCreator>

let initialState: ProfilePageType = {
        newPostText: '',
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: '12'},
            {id: 2, message: 'It is my first post', likesCount: '23'},
        ],
    }

export const profileReducer = (state = initialState, action: ActionsTypes): ProfilePageType => {
    switch (action.type) {
        case ADD_POST:
            const newPost: PostsPropsType = {
                id: new Date().getTime(),
                message: state.newPostText,
                likesCount: '0'
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state
        case CHANGE_NEW_TEXT:
            state.newPostText = action.newText
            return state
        default:
            return state
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
