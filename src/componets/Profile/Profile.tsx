import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsTypes} from "../../redux/store";
import {RootStoreType} from "../../redux/redux-store";

type ProfileTypeProps = {
    store: RootStoreType
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