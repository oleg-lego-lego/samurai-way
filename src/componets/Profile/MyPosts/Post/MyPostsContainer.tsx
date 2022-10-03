import React from 'react';
import {MyPosts} from "../MyPosts";
import {RootStoreType} from "../../../../redux/redux-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {addPostAC} from "../../../../redux/profile-reducer";
import {PostsPropsType} from "../../../../redux/store";

type MapStatePropsType = {
    posts: Array<PostsPropsType>
}

type MapDispatchPropsType = {
    addPost: (newPostText: string) => void
}

const mapStateToProps = (state: RootStoreType): MapStatePropsType => {
    return{
        posts: state.profilePage.posts,
    }
}

const mapDispatchToProps = (dispatch:  Dispatch): MapDispatchPropsType => {
    return{
        addPost: (newPostText: string) => {
            dispatch(addPostAC(newPostText))
        }
    }
}



export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)