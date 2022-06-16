import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/profile-reducer";
import {MyPosts} from "../MyPosts";
import {RootStoreType} from "../../../../redux/redux-store";
import {PostsPropsType} from "../../../../redux/store";
import {connect} from "react-redux";
import {Dispatch} from "redux";

type MapStatePropsType = {
    posts: Array<PostsPropsType>
    newPostText: string
}

type MapDispatchPropsType = {
    updateNewPostText: (newText: string) => void
    addPost: () => void
}

const mapStateToProps = (state: RootStoreType): MapStatePropsType => {
    return{
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch:  Dispatch): MapDispatchPropsType => {
    return{
        updateNewPostText: (newText: string) => {
            let action = updateNewPostTextActionCreator(newText);
            dispatch(action);
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        }
    }
}



export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)