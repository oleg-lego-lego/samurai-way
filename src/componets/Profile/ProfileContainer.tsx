import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, ProfileType} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router";

type PathParamsType = {
    userId: string,
}

type MapsStatePropsType = {
    profile: ProfileType
}

type MapDispatchPropsType = {
    getUserProfile: (userId: number) => void
}

type OwnPropsType = MapsStatePropsType & MapDispatchPropsType
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

class ProfileContainer extends React.Component<any, PropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2';
        }
        this.props.getUserProfile(userId)
    }

    render() {
        return (
            <Profile profile={this.props.profile} {...this.props}/>
        )
    }
}

let mapStateToProps = (state: any): MapsStatePropsType => {
    return ({
        profile: state.profilePage.profile
    })
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);
