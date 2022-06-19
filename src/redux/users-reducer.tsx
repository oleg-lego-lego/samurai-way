import {ActionsTypes, PostsPropsType, ProfilePageType,} from "./store";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS'


export type AddPostActionType = ReturnType<typeof >
export type ChangeNewTextType = ReturnType<typeof >

let initialState = {
    newPostText: '',
    users: [
        {id: '1', photoUrl: 'https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300', followed: true, fullName: 'oleg', status: 'I am a boss', location: {city: 'Minsk', country: 'Belarus'}},
        {id: '2', photoUrl: 'https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300', followed: false, fullName: 'sasha', status: 'I am a boss too', location: {city: 'Moscow', country: 'Russia'}},
        {id: '3', photoUrl: 'https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300', followed: true, fullName: 'andrew', status: 'I am a boss too', location: {city: 'Kiev', country: 'Ukraine'}},
    ],
}

export const usersReducer = (state = initialState, action: ActionsTypes): ProfilePageType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((el) => {
                    if (el.id === action.userID) {
                        return {...el, followed: true}
                    }
                   return el
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((el) => {
                    if (el.id === action.userID) {
                        return {...el, followed: false}
                    }
                    return el
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        default:
            return state
    }
}

export const followAC = (userID: any) => {
    return {
        type: 'FOLLOW',
        userID: userID
    } as const
}

export const unfollowAC = (userID: any) => {
    return {
        type: 'UNFOLLOW',
        userID: userID
    } as const
}

export const setUsersAC = (users: any) => {
    return {
        type: 'SET_USERS',
        userID: users
    } as const
}
