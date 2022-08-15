import React from 'react';
import './App.css';
import {Header} from "./componets/Header/Header";
import {Navbar} from "./componets/Navbar/Navbar";
import {Route} from 'react-router-dom';
import {DialogsContainer} from "./componets/Dialogs/DialogsContainer";
import {UserContainer} from "./componets/Users/UsersContainer";
import ProfileContainer from "./componets/Profile/ProfileContainer";


const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path={'/dialogs'} render={() => <DialogsContainer/>}/>
                <Route path={'/profile/:userId'} render={() => <ProfileContainer/>}/>
                <Route path={'/users'} render={() => <UserContainer/>}/>
            </div>
        </div>
    );
}


export default App;
