import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {ActionsTypes} from "../../../redux/store";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {RootStoreType} from "../../../redux/redux-store";


type MyPostsTypeProps = {
    store: RootStoreType
    dispatch: (action: ActionsTypes) => void
}

export const MyPosts = (props: MyPostsTypeProps) => {
    let postsElements = props.store.profilePage.posts.map((p) => <Post message={p.message} likesCount={p.likesCount}/>)

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    let newTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newText = e.currentTarget.value
        props.dispatch(updateNewPostTextActionCreator(newText))
    }


    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={newTextChangeHandler}
                              value={props.store.profilePage.newPostText}
                    />
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}