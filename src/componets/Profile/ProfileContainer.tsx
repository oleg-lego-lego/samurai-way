import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/Post/MyPostsContainer";

class ProfileContainer extends React.Component<any, any>{
    render() {
        return (
            <div>
                <ProfileInfo/>
                <MyPostsContainer/>
            </div>
        )
    }
}

export default ProfileContainer;
