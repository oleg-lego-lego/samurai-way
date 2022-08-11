import React from 'react';
import {connect} from "react-redux";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    UsersType
} from "../../redux/users-reducer";
import {RootStoreType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import UsersAPIComponent from "./UsersAPIComponent";


type MapStatePropsType = {
    users: any // fixed any
    //Array<UsersType>
    //users: Array<UsersPropsTypeIP>
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

type MapDispatchPropsType = {
    follow: (userID: string) => void
    unfollow: (userID: string) => void
    setUsers: (users: Array<UsersType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
}


const mapStateToProps = (state: RootStoreType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
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
        setUsers: (users: Array<UsersType>) => { // fixed any
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)
