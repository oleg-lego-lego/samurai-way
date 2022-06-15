import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/profile-reducer";
import {MyPosts} from "../MyPosts";
import {RootStoreType} from "../../../../redux/redux-store";
import {ActionsTypes} from "../../../../redux/store";


type MyPostsTypeProps = {
    store: RootStoreType
    dispatch: (action: ActionsTypes) => void
}

export const MyPostsContainer = (props: MyPostsTypeProps) => {

    let state = props.store

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    let onPostChange = (newText: string) => {
        let action = updateNewPostTextActionCreator(newText);
        props.dispatch(action);
    }


    return (
        <MyPosts
            updateNewPostText={onPostChange}
            addPost={addPost}
            posts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText}
        />
    )
}