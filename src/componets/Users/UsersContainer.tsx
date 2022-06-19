import React from 'react';
import {Users} from "./Users";
import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC} from "../../redux/users-reducer";


const mapStateToProps = (state: any): any => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch: any): any => {
    return {
        follow: (userID: any) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID: any) => {
            dispatch(unfollowAC(userID))
        },
        setUsers: (users: any) => {
            dispatch(setUsersAC(users))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Users)
