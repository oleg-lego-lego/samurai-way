import {ActionsTypes, PostsPropsType, ProfilePageType,} from "./store";

const ADD_POST = 'ADD-POST';
const CHANGE_NEW_TEXT = 'CHANGE-NEW-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';


export type AddPostActionType = ReturnType<typeof addPostActionCreator>
export type ChangeNewTextType = ReturnType<typeof updateNewPostTextActionCreator>
export type SetUserProfileActionType = ReturnType<typeof setUserProfileActionCreator>

let initialState: ProfilePageType = {
    newPostText: '',
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: '12'},
        {id: 2, message: 'It is my first post', likesCount: '23'},
    ],
    //profile: any ??
}

export const profileReducer = (state = initialState, action: ActionsTypes): ProfilePageType | any => { // fixed any
    switch (action.type) {
        case ADD_POST: {
            const newPost: PostsPropsType = {
                id: new Date().getTime(),
                message: state.newPostText,
                likesCount: '0'
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        }
        case CHANGE_NEW_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
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

export const setUserProfileActionCreator = (profile: any) => { //fixed any
    return {
        type: "SET_USER_PROFILE",
        profile: profile
    } as const
}
