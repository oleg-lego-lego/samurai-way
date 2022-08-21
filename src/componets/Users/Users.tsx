import React from 'react';
import s from './users.module.css'
import userPhoto from '../../assets/images/user.png'
import {NavLink} from "react-router-dom";
import {UsersType} from "../../redux/users-reducer";
import axios from "axios";

type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: UsersType[]
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    toggleFollowingInProgress: (isFetching: boolean) => void
    followingInProgress: boolean
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
                                        ? <button disabled={props.followingInProgress} onClick={() => {
                                            props.toggleFollowingInProgress(true)
                                            axios.delete(`https://social-network.samuraijs.com/api/1.0//follow/${u.id}`,
                                                {
                                                    withCredentials: true,
                                                    headers: {
                                                        "API-KEY" : 'c87c7dc1-887f-4f95-ba2a-89ed1b83f551'
                                                    }
                                                })
                                                .then(response => {
                                                    if (response.data.resultCode === 0) {
                                                        props.unfollow(u.id);
                                                    }
                                                    props.toggleFollowingInProgress(false)
                                                });
                                        }}>UnFollow</button>
                                        : <button disabled={props.followingInProgress} onClick={() => {
                                            props.toggleFollowingInProgress(true)
                                            axios.post(`https://social-network.samuraijs.com/api/1.0//follow/${u.id}`, {},
                                                {
                                                    withCredentials: true,
                                                    headers: {
                                                        "API-KEY" : 'c87c7dc1-887f-4f95-ba2a-89ed1b83f551'
                                                    }
                                                })
                                                .then(response => {
                                                    if (response.data.resultCode === 0) {
                                                        props.follow(u.id);
                                                    }
                                                    props.toggleFollowingInProgress(false)
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