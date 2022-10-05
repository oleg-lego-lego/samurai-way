import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {RootStoreType} from "../../redux/redux-store";
import {getAuthUserData, logout} from "../../redux/auth-reducer";

type MapStateToPropsType = {
    login: null | string,
    isAuth: boolean
}

type MapDispatchToProps = {
    logout: () => void
}

export type AuthPropsType = MapStateToPropsType & MapDispatchToProps

class HeaderContainer extends React.Component<any, AuthPropsType> {
    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        const {login, isAuth} = this.props;
        return (
            <Header isAuth={isAuth} login={login} logout={logout}/>
        )
    }
}

const mapStateToProps = (state: RootStoreType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}

export default connect(mapStateToProps, {getAuthUserData, logout})(HeaderContainer)