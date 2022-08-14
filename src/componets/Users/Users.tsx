import React from 'react';
import s from './users.module.css'
import userPhoto from '../../assets/images/user.png'
import {UsersPropsTypeIP} from "./UsersContainer";
import {NavLink} from "react-router-dom";

type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: any
    onPageChanged: (pageNumber: number) => void
    users: UsersPropsTypeIP
    follow: (userID: string) => void
    unfollow: (userID: string) => void
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
                        <span className={props.currentPage === p && s.selectedPage}
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
                                    {u.followed ? <button onClick={() => {
                                            props.unfollow(u.id)
                                        }}>UnFollow</button>
                                        : <button onClick={() => {
                                            props.follow(u.id)
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