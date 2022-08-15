import React from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfileType, setUserProfileAC} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router";

type PathParamsType = {
    userId: string,
}

type MapsStatePropsType = {
    profile: ProfileType
}

type MapDispatchPropsType = {
    setUserProfileAC: (profile: ProfileType) => void
}

type OwnPropsType = MapsStatePropsType & MapDispatchPropsType
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

class ProfileContainer extends React.Component<any, PropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2';
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfileAC(response.data)
            });
    }

    render() {
        return (
            <Profile profile={this.props.profile}
                {...this.props}
            />
        )
    }
}

let mapStateToProps = (state: any): MapsStatePropsType => {
    return ({
        profile: state.profilePage.profile
    })
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfileAC})(WithUrlDataContainerComponent);
