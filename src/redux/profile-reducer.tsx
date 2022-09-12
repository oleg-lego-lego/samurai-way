import {ActionsTypes, PostsPropsType,} from "./store";
import {Dispatch} from "redux";
import {ProfileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const CHANGE_NEW_TEXT = 'CHANGE-NEW-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

export type addPostActionType = ReturnType<typeof addPostAC>
export type updateNewPostTextActionType = ReturnType<typeof updateNewPostTextAC>
export type setUserProfileActionType = ReturnType<typeof setUserProfileAC>
export type setStatusActionType = ReturnType<typeof setStatusAC>

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

export let initialState = {
    newPostText: '',
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: '12'},
        {id: 2, message: 'It is my first post', likesCount: '23'},
    ] as Array<MyPostsArrayProps>,
    profile: null as ProfileType | null,
    status: '',
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
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state
    }
}

export const addPostAC = () => {
    return {type: "ADD-POST"} as const
}

export const updateNewPostTextAC = (newText: string) => {
    return {type: "CHANGE-NEW-TEXT", newText: newText} as const
}

export const setUserProfileAC = (profile: ProfileType) => {
    return {type: "SET_USER_PROFILE", profile: profile} as const
}

export const setStatusAC = (status: string) => {
    return {type: "SET_STATUS", status} as const
}

export const getUserProfile = (userId: number) => (dispatch: Dispatch) => {
    return ProfileAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfileAC(response.data))
        });
}

export const getStatus = (userId: number) => (dispatch: Dispatch) => {
    return ProfileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatusAC(response.data))
        });
}

export const updateStatus = (status: string) => (dispatch: Dispatch) => {
    return ProfileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatusAC(status))
            }
        });
}
