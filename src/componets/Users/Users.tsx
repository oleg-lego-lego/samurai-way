import React from "react";
import s from "./users.module.css"

export let Users = (props: any) => {
    if(props.users.length === 0) {
        props.setUsers([
            {
            id: '1',
            photoUrl: 'https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300',
            followed: true,
            fullName: 'oleg',
            status: 'I am a boss',
            location: {city: 'Minsk', country: 'Belarus'}
        },
            {
                id: '2',
                photoUrl: 'https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300',
                followed: false,
                fullName: 'sasha',
                status: 'I am a boss too',
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                id: '3',
                photoUrl: 'https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300',
                followed: true,
                fullName: 'andrew',
                status: 'I am a boss too',
                location: {city: 'Kiev', country: 'Ukraine'}
            }])
    }

    return (
        <div>
            <div>{props.users.map((el: any) => <div key={el.id}>
            <span>
                <div>
                    <img src={el.photoUrl} className={s.userPhoto}/>
                </div>
                <div>
                    {el.followed
                        ? <button onClick={() => {
                            props.unfollow(el.id)
                        }}>UnFollow</button>
                        : <button onClick={() => {
                            props.follow(el.id)
                        }}>Follow</button>
                    }
                </div>
            </span>
                <span>
                <span>
                    <div>{el.fullName}</div>
                    <div>{el.status}</div>
                </span>
                <span>
                    <div>{el.location.country}</div>
                    <div>{el.location.city}</div>
                </span>
            </span>
            </div>)}
            </div>
        </div>
    )
}