import React from 'react';
import './App.css';
import {Navbar} from "./componets/Navbar/Navbar";
import {Route} from 'react-router-dom';
import ProfileContainer from "./componets/Profile/ProfileContainer";
import HeaderContainer from "./componets/Header/HeaderContainer";
import {Login, LoginContainer} from "./componets/Login/Login";
import DialogsContainer from "./componets/Dialogs/DialogsContainer";
import UsersContainer from "./componets/Users/UsersContainer";


const App = () => {
    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path={'/dialogs'} render={() => <DialogsContainer/>}/>
                <Route path={'/profile/:userId?'} render={() => <ProfileContainer/>}/>
                <Route path={'/users'} render={() => <UsersContainer/>}/>
                <Route path={'/login'} render={() => <LoginContainer />}/>
            </div>
        </div>
    );
}


export default App;
