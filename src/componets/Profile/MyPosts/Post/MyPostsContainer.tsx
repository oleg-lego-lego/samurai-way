import React from 'react';
import {MyPosts} from "../MyPosts";
import {RootStoreType} from "../../../../redux/redux-store";
import {PostsPropsType} from "../../../../redux/store";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {addPostAC, updateNewPostTextAC} from "../../../../redux/profile-reducer";

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
            let action = updateNewPostTextAC(newText);
            dispatch(action);
        },
        addPost: () => {
            dispatch(addPostAC())
        }
    }
}



export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)