import React from 'react';
import s from './users.module.css'
import userPhoto from '../../assets/images/user.png'
import {NavLink} from "react-router-dom";
import {UsersType} from "../../redux/users-reducer";
import {UsersAPI} from "../../api/api";

type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: UsersType[]
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    toggleFollowingInProgress: (isFetching: boolean, userId: number) => void
    followingInProgress: Array<number>
}

const Users = (props: UsersPropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {pages.map(p => {
                    return (
                        <span className={props.currentPage === p ? s.selectedPage : ''}
                              onClick={() => props.onPageChanged(p)}>{p}</span>
                    )
                })}
            </div>

            <div>{props.users.map((u) => {
                    return (
                        <div key={u.id}>
                            <span>
                                <div>
                                    <NavLink to={'/profile/' + u.id}>
                                        <img src={u.photos.small !== null ? u.photos.small : userPhoto}
                                             className={s.userPhoto} alt={''}/>
                                    </NavLink>
                                </div>
                                <div>
                                    {u.followed
                                        ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                            props.toggleFollowingInProgress(true, u.id)
                                            UsersAPI.follow(u.id)
                                                .then(response => {
                                                    if (response.data.resultCode === 0) {
                                                        props.unfollow(u.id);
                                                    }
                                                    props.toggleFollowingInProgress(false, u.id)
                                                });
                                        }}>UnFollow</button>
                                        : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                            props.toggleFollowingInProgress(true, u.id)
                                            UsersAPI.unfollow(u.id)
                                                .then(response => {
                                                    if (response.data.resultCode === 0) {
                                                        props.follow(u.id);
                                                    }
                                                    props.toggleFollowingInProgress(false, u.id)
                                                        });
                                        }}>Follow</button>}
                               </div>
                            </span>
                            <span>
                                <span>
                                    <div>{u.name}</div>
                                    <div>{u.status}</div>
                                </span>
                                <span>
                                    <div>{'u.location.country'}</div>
                                    <div>{'u.location.city'}</div>
                                </span>
                            </span>
                        </div>
                    )
                }
            )}
            </div>
        </div>
    );
};

export default Users;