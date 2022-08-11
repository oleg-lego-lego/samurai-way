import React from "react";
import {UsersType} from "../../redux/users-reducer";
import axios from "axios";
import Users from "./Users";

type UsersPhotosType = {
    small: null
    large: null
}

export type UsersPropsTypeIP = {
    name: string
    id: string
    uniqueUrlName: null,
    photos: UsersPhotosType
    status: null
    followed: boolean
}

type UsersAPIComponentPropsType = {
    users: Array<UsersPropsTypeIP>
    follow: (userID: string) => void
    unfollow: (userID: string) => void
    setUsers: (users: Array<UsersType>) => void
    pageSize: number
    totalUsersCount: number
    currentPage: any // fixed any
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
}

class UsersAPIComponent extends React.Component<UsersAPIComponentPropsType, UsersAPIComponentPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            });
    }


    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            });
    }

    render() {
        return (
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
            />
        )
    }
}


export default UsersAPIComponent
