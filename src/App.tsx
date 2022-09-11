import React from 'react';
import './App.css';
import {Navbar} from "./componets/Navbar/Navbar";
import {Route} from 'react-router-dom';
import {UserContainer} from "./componets/Users/UsersContainer";
import ProfileContainer from "./componets/Profile/ProfileContainer";
import HeaderContainer from "./componets/Header/HeaderContainer";
import {Login} from "./componets/Login/Login";
import DialogsContainer from "./componets/Dialogs/DialogsContainer";


const App = () => {
    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path={'/dialogs'} render={() => <DialogsContainer/>}/>
                <Route path={'/profile/:userId?'} render={() => <ProfileContainer/>}/>
                <Route path={'/users'} render={() => <UserContainer/>}/>
                <Route path={'/login'} render={() => <Login/>}/>
            </div>
        </div>
    );
}


export default App;
