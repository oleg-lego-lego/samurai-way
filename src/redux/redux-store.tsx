import {combineReducers, createStore, Store} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {StatePropsType} from "./store";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebarReducer: sidebarReducer
})

export type RootStoreType = ReturnType<typeof reducers>

let store: Store<RootStoreType> = createStore(reducers)

export default store