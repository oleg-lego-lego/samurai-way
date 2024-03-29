import React from "react";
import s from "./users.module.css"
import {UsersType} from "../../redux/users-reducer";
import axios from "axios";
import userPhoto from "../../assets/images/user.png"

type UsersPhotosType = {
    small: null
    large: null
}

type UsersPropsTypeIP = {
    name: string
    id: string
    uniqueUrlName: null,
    photos: UsersPhotosType
    status: null
    followed: boolean
}

type UsersPropsType = {
    users: Array<UsersPropsTypeIP> // fixed any
    //users: Array<UsersType>
    follow: (userID: string) => void
    unfollow: (userID: string) => void
    setUsers: (users: Array<UsersType>) => void
}

export let UsersComponent = (props: UsersPropsType) => {
    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {
                    props.setUsers(response.data.items)
                    // [
                    // {
                    //     id: '1',
                    //     photoUrl: 'data:image/jpeg;base64,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',
                    //     followed: true,
                    //     fullName: 'oleg',
                    //     status: 'I am a boss',
                    //     location: {city: 'Minsk', country: 'Belarus'}
                    // },
                    // {
                    //     id: '2',
                    //     photoUrl: 'data:image/jpeg;base64,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',
                    //     followed: false,
                    //     fullName: 'sasha',
                    //     status: 'I am a boss too',
                    //     location: {city: 'Moscow', country: 'Russia'}
                    // },
                    // {
                    //     id: '3',
                    //     photoUrl: 'data:image/jpeg;base64,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',
                    //     followed: true,
                    //     fullName: 'andrew',
                    //     status: 'I am a boss too',
                    //     location: {city: 'Kiev', country: 'Ukraine'}
                    // }]

                });
        }

    }

    return (
        <div>
            <button onClick={getUsers}>Get Users</button>
            <div>{props.users.map((u) => <div key={u.id}>
            <span>
                <div>
                    <img src={u.photos.small !== null ? u.photos.small : userPhoto} className={s.userPhoto} alt={''}/>
                </div>
                <div>
                    {u.followed
                        ? <button onClick={() => {
                            props.unfollow(u.id)
                        }}>UnFollow</button>
                        : <button onClick={() => {
                            props.follow(u.id)
                        }}>Follow</button>
                    }
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
            </div>)}
            </div>
        </div>
    )
}