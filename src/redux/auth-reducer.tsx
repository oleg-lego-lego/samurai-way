import {ActionsTypes,} from "./store";

const SET_USER_DATA = 'SET_USER_DATA';

export type SetUserDataActionType = ReturnType<typeof setUserData>



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
    id: number | null,
    email: string | null,
    login: string | null,
}

let initialState: UsersStateType = {
    id: null,
    email: '',
    login: '',
}

export const authReducer = (state = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            }
        default:
            return state
    }
}

export const setUserData = (userID: number, email: string, login: string) => {
    return {type: 'SET_USER_DATA', data: {userID, email, login}} as const
}


