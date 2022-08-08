import React from 'react';
import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC, UsersType} from "../../redux/users-reducer";
import {RootStoreType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import Users from "./Users";


type MapStatePropsType = {
    users: any // fixed any
        //Array<UsersType>
    //users: Array<UsersPropsTypeIP>
}

type MapDispatchPropsType = {
    follow: (userID: string) => void
    unfollow: (userID: string) => void
    setUsers: (users: Array<UsersType>) => void
}


const mapStateToProps = (state: RootStoreType) : MapStatePropsType=> {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        follow: (userID: string) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID: string) => {
            dispatch(unfollowAC(userID))
        },
        setUsers: (users: any) => { // fixed any
            dispatch(setUsersAC(users))
        }
    }
}


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
