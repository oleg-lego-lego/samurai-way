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
    email: string | null
    login: string | null
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
                ...action.payload
            }
        default:
            return state
    }
}

export const setAuthUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean) => {
    return {type: 'SET_USER_DATA', payload: {id, email, login, isAuth}} as const
}

export const getAuthUserData = () => (dispatch: Dispatch) => {
    AuthAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                dispatch(setAuthUserData(id, email, login, true))
            }
        });
}

export const login = (email: string, password: string, rememberMe: boolean) => (dispatch: Dispatch) => {
    AuthAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                // @ts-ignore
                dispatch(getAuthUserData())
            }
        });
}

export const logout = () => (dispatch: Dispatch) => {
    AuthAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        });
}


