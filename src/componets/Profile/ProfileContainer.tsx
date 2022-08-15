import React from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfileType, setUserProfileAC} from "../../redux/profile-reducer";
import { withRouter } from "react-router";

type ProfileContainerPropsType = {
    profile: ProfileType
}

class ProfileContainer extends React.Component<any, any>{
    componentDidMount() {
        let userId = this.match.params.userId
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data)
            });
    }

    render() {
        return (
            <Profile profile={this.props.profile}
                /*{...this.props}*/
            />
        )
    }
}

let mapStateToProps = (state: any) => ({
    profile: state.profilePage.profile
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfileAC})(WithUrlDataContainerComponent);
