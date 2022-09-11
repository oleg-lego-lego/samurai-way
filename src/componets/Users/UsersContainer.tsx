import React from 'react';
import {connect} from "react-redux";
import {
    followThunkCreator,
    getUsersThunkCreator,
    setCurrentPageAC,
    unfollowThunkCreator,
    UsersType
} from "../../redux/users-reducer";
import {RootStoreType} from "../../redux/redux-store";
import Users from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {compose} from "redux";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";


type UsersAPIComponentPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: UsersType[]
    followingInProgress: Array<number>
    unfollowThunkCreator: (userId: number) => void
    followThunkCreator: (userId: number) => void
    getUsersThunkCreator: (currentPage: number, pageSize: number) => void
    isFetching: boolean
}

class UsersContainer extends React.Component<UsersAPIComponentPropsType> { //fixed any
    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsersThunkCreator(pageNumber, this.props.pageSize)
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    users={this.props.users}
                    followingInProgress={this.props.followingInProgress}
                    unfollowThunkCreator={this.props.unfollowThunkCreator}
                    followThunkCreator={this.props.followThunkCreator}
                />
            </>
        )
    }
}


type MapStatePropsType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}

const mapStateToProps = (state: RootStoreType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}

export default compose<React.ComponentType>(
    WithAuthRedirect,
    connect(mapStateToProps, {
        followThunkCreator: followThunkCreator,
        unfollowThunkCreator: unfollowThunkCreator,
        setCurrentPage: setCurrentPageAC,
        getUsersThunkCreator: getUsersThunkCreator,
    }),
)(UsersContainer)