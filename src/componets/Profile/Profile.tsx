import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsTypes} from "../../redux/store";
import {RootStoreType} from "../../redux/redux-store";
import {MyPostsContainer} from "./MyPosts/Post/MyPostsContainer";

type ProfileTypeProps = {
    store: RootStoreType
    dispatch: (action: ActionsTypes) => void
}

export const Profile = (props: ProfileTypeProps) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer store={props.store} dispatch={props.dispatch}/>
        </div>
    )
}