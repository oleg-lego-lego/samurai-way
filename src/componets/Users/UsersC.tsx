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
    users: Array<UsersPropsTypeIP>
    follow: (userID: string) => void
    unfollow: (userID: string) => void
    setUsers: (users: Array<UsersType>) => void
}

class Users extends React.Component<UsersPropsType, UsersPropsType> {
    getUsers = () => {
        if (this.props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {
                    this.props.setUsers(response.data.items)
                });
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.getUsers}>Get Users</button>
                <div>{this.props.users.map((u) => <div key={u.id}>
            <span>
                <div>
                    <img src={u.photos.small !== null ? u.photos.small : userPhoto} className={s.userPhoto} alt={''}/>
                </div>
                <div>
                    {u.followed
                        ? <button onClick={() => {
                            this.props.unfollow(u.id)
                        }}>UnFollow</button>
                        : <button onClick={() => {
                            this.props.follow(u.id)
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
}


export default Users
