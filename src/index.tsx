import React from 'react';
import './index.css';
import store from './redux/state'
import ReactDOM from 'react-dom';
import App from './App';


let rerenderEntireTree = () => {
    ReactDOM.render(
        <App store={store.getState()} dispatch={store.dispatch.bind(store)}/>,
        document.getElementById('root')
    );
}

rerenderEntireTree()

store.subscribe(rerenderEntireTree)


