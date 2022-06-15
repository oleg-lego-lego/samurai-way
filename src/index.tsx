import React from 'react';
import './index.css';
import store from './redux/redux-store'
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

store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state)
})


