import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, ProfileType} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router";
import { Redirect } from 'react-router-dom';

type PathParamsType = {
    userId: string,
}

type MapsStatePropsType = {
    profile: ProfileType
    isAuth: boolean
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
        if(!this.props.isAuth) {
            return <Redirect to={'/login'}/>
        }

        return (
            <Profile profile={this.props.profile} {...this.props}/>
        )
    }
}

let mapStateToProps = (state: any): MapsStatePropsType => {
    return ({
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth,
    })
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);
