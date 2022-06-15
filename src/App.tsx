import React from 'react';
import './App.css';
import {Header} from "./componets/Header/Header";
import {Navbar} from "./componets/Navbar/Navbar";
import {Profile} from "./componets/Profile/Profile";
import {BrowserRouter, Route} from 'react-router-dom';
import {ActionsTypes} from "./redux/store";
import {RootStoreType} from "./redux/redux-store";
import {DialogsContainer} from "./componets/Dialogs/DialogsContainer";


type AppTypeProps = {
    store: RootStoreType
    dispatch: (action: ActionsTypes) => void
}

const App = (props: AppTypeProps) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path={'/dialogs'}
                           render={() => <DialogsContainer store={props.store} dispatch={props.dispatch}/>}/>
                    <Route path={'/profile'}
                           render={() => <Profile store={props.store} dispatch={props.dispatch}/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
