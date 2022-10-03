import React, {FC} from 'react';
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {PostsPropsType} from "../../../redux/store";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

type MyPostsTypeProps = {
    addPost: (newPostText: string) => void
    posts: Array<PostsPropsType>
}

type FormDataType = {
    newPostText: string
}

const maxLength = maxLengthCreator(10)


export const MyPosts = (props: MyPostsTypeProps) => {
    let postsElements = props.posts.map((p) => <Post message={p.message} likesCount={p.likesCount}/>)

    let onAddPost = (values: FormDataType) => {
        props.addPost(values.newPostText)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

const AddNewPostForm: FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'newPostText'} component={Textarea} placeholder={'Post message'}
                       validate={[required, maxLength]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm<FormDataType>({form: 'profileAddNewPostForm'})(AddNewPostForm)