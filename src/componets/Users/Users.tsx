import React from 'react';
import s from './users.module.css'
import {UsersPropsTypeIP} from "./UsersAPIComponent";
import userPhoto from '../../assets/images/user.png'

type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: any
    onPageChanged: (pageNumber: number) => void
    users: Array<UsersPropsTypeIP>
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
                              onClick={(e) => props.onPageChanged(p)}>{p}</span>
                    )
                })}
            </div>

            <div>{props.users.map((u) => {
                    return (
                        <div key={u.id}>
                            <span>
                                <div>
                                    <img src={u.photos.small !== null ? u.photos.small : userPhoto}
                                         className={s.userPhoto} alt={''}/>
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