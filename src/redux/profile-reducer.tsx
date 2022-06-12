import {ActionsTypes, PostsPropsType, ProfilePageType,} from "./state";


const ADD_POST = 'ADD-POST';
const CHANGE_NEW_TEXT = 'CHANGE-NEW-TEXT';


export type AddPostActionType = ReturnType<typeof addPostActionCreator>
export type ChangeNewTextType = ReturnType<typeof updateNewPostTextActionCreator>

export const profileReducer = (state: ProfilePageType, action: ActionsTypes) => {
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
