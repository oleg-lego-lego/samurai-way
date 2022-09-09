import {ActionsTypes,} from "./store";
import {Dispatch} from "redux";
import {AuthAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

export type SetUserDataActionType = ReturnType<typeof setAuthUserData>



type UserLocationType = {
    city: string
    country: string
}
type PhotoType = {
    small: string
    large: string
}
export type UsersType = {
    id: number
    photos: PhotoType
    followed: boolean
    name: string
    status: string
    location: UserLocationType
}

export type UsersStateType = {
    id: number | null
    email: string
    login: string
    isAuth: boolean
}

let initialState: UsersStateType = {
    id: null,
    email: '',
    login: '',
    isAuth: false,
}

export const authReducer = (state = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }
}

export const setAuthUserData = (id: number, email: string, login: string) => {
    return {type: 'SET_USER_DATA', data: {id, email, login}} as const
}

export const getAuthUserData = () => (dispatch: Dispatch) => {
    AuthAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                dispatch(setAuthUserData(id, email, login))
            }
        });
}


