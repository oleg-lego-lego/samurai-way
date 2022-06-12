import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, StatePropsType} from "../../redux/state";

type ProfileTypeProps = {
    store: StatePropsType
    dispatch: (action: ActionsTypes) => void
}

export const Profile = (props: ProfileTypeProps) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts store={props.store} dispatch={props.dispatch}/>
        </div>
    )
}