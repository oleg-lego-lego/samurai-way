import {ActionsTypes, PostsPropsType,} from "./store";

const ADD_POST = 'ADD-POST';
const CHANGE_NEW_TEXT = 'CHANGE-NEW-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

export type addPostActionCreator = ReturnType<typeof addPostAC>
export type updateNewPostTextActionCreator = ReturnType<typeof updateNewPostTextAC>
export type setUserProfileActionCreator = ReturnType<typeof setUserProfileAC>

export type MyPostsArrayProps = {
    id: number
    message: string
    likesCount: string // fixed string || number
}

export type ContactsPropsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

export type PhotoPropsType = {
    small: string
    large: string
}

export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsPropsType
    photos: PhotoPropsType
    aboutMe: string
}

let initialState = {
//let initialState: ProfilePageType = {
    newPostText: '',
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: '12'},
        {id: 2, message: 'It is my first post', likesCount: '23'},
    ]  as Array<MyPostsArrayProps>,
    profile: null as ProfileType | null,
}

export type InitialStateType = typeof initialState


export const profileReducer = (state = initialState, action: ActionsTypes): InitialStateType => { // fixed any
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

export const addPostAC = () => {
    return {
        type: "ADD-POST"
    } as const
}

export const updateNewPostTextAC = (newText: string) => {
    return {
        type: "CHANGE-NEW-TEXT",
        newText: newText
    } as const
}

export const setUserProfileAC = (profile: any) => { //fixed any
    return {
        type: "SET_USER_PROFILE",
        profile: profile
    } as const
}
