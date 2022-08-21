import React from 'react';
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";

type MapStateToPropsType = {
    login: null,
    isAuth: boolean
}

type MapDispatchToProps = {}

export type AuthPropsType = MapStateToPropsType & MapDispatchToProps

class HeaderContainer extends React.Component<any, AuthPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data
                    this.props.setAuthUserData(id, email, login)
                }
            });
    }

    render() {
        const {login, isAuth} = this.props;
        return (
            <Header isAuth={isAuth} login={login}/>
        )
    }
}

const mapStateToProps = (state: AppStateType) => {
    isAuth: state.auth.isAuth
    login: state.auth.login
}

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)