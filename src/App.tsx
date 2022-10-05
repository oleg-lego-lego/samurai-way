import React from 'react';
import './App.css';
import {Navbar} from "./componets/Navbar/Navbar";
import {Route} from 'react-router-dom';
import ProfileContainer from "./componets/Profile/ProfileContainer";
import HeaderContainer from "./componets/Header/HeaderContainer";
import {LoginContainer} from "./componets/Login/Login";
import DialogsContainer from "./componets/Dialogs/DialogsContainer";
import UsersContainer from "./componets/Users/UsersContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import {withRouter} from "react-router";
import {initializeApp} from "./redux/app-reducer";
import {RootStoreType} from "./redux/redux-store";
import {Preloader} from "./componets/common/Preloader/Preloader";


type MapStateToPropsType = {
    initialized: boolean
}

type MapDispatchToProps = {
    initializeApp: () => void
}

export type AppPropsType = MapStateToPropsType & MapDispatchToProps

class App extends React.Component <AppPropsType> {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path={'/dialogs'} render={() => <DialogsContainer/>}/>
                    <Route path={'/profile/:userId?'} render={() => <ProfileContainer/>}/>
                    <Route path={'/users'} render={() => <UsersContainer/>}/>
                    <Route path={'/login'} render={() => <LoginContainer/>}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: RootStoreType): MapStateToPropsType => ({
    initialized: state.app.initialized
})


export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp})(App)
)

// let AppContainer = compose<React.ComponentType>(
//     connect(mapStateToProps, {initializeApp}),
// )(App)
