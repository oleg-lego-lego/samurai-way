import {ActionsTypes,} from "./store";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

export type FollowActionType = ReturnType<typeof followAC>
export type UnfollowActionType = ReturnType<typeof unfollowAC>
export type SetUsersActionType = ReturnType<typeof setUsersAC>
export type CurrentPageACActionType = ReturnType<typeof setCurrentPageAC>
export type setTotalUsersCountACActionType = ReturnType<typeof setTotalUsersCountAC>
export type ToggleIsFetchingACActionType = ReturnType<typeof toggleIsFetchingAC>

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
    users: UsersType[]
    pageSize: number
    portionSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}


let initialState: UsersStateType = {
    users: [],
    pageSize: 10,
    portionSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,

}

export const usersReducer = (state= initialState, action: ActionsTypes): UsersStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userID ? {...u, followed: true} : u)
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userID ? {...u, followed: false} : u)
            }
        case SET_USERS:
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.count}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        default:
            return state
    }
}

export const followAC = (userID: number) => {
    return {type: 'FOLLOW', userID: userID} as const
}

export const unfollowAC = (userID: number) => {
    return {type: 'UNFOLLOW', userID: userID} as const
}

export const setUsersAC = (users: Array<UsersType>) => {
    return {type: 'SET_USERS', users: users} as const
}

export const setCurrentPageAC = (currentPage: number) => {
    return {type: 'SET_CURRENT_PAGE', currentPage: currentPage} as const
}

export const setTotalUsersCountAC = (totalUsersCount: number) => {
    return {type: 'SET_TOTAL_USERS_COUNT', count: totalUsersCount} as const
}

export const toggleIsFetchingAC = (isFetching: boolean) => {
    return {type: 'TOGGLE_IS_FETCHING', isFetching: isFetching} as const
}

