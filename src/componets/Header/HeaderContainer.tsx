import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-reducer";
import {RootStoreType} from "../../redux/redux-store";
import {AuthAPI} from "../../api/api";

type MapStateToPropsType = {
    login: null | string,
    isAuth: boolean
}

type MapDispatchToProps = {}

export type AuthPropsType = MapStateToPropsType & MapDispatchToProps

class HeaderContainer extends React.Component<any, AuthPropsType> {
    componentDidMount() {
        AuthAPI.me()
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

const mapStateToProps = (state: RootStoreType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)